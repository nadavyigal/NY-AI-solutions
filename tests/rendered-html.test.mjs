import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Hebrew NY AI Consulting landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="he"[^>]*dir="rtl"/i);
  assert.match(html, /AI יכול לעשות הרבה יותר/);
  assert.match(html, /ספרינט ערך AI/);
  assert.match(html, /RunSmart/);
  assert.match(html, /Resumely/);
  assert.match(html, /972545333773/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|admin\/page-posts/i);
});

test("keeps the lead flow private and client-side", async () => {
  const [form, page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/LeadForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(form, /encodeURIComponent\(message\)/);
  assert.match(form, /window\.open\(whatsappUrl/);
  assert.match(form, /name="name"/);
  assert.match(form, /name="company"/);
  assert.match(form, /name="teamSize"/);
  assert.match(form, /name="currentAITools"/);
  assert.match(form, /name="workflow"/);
  assert.doesNotMatch(form, /fetch\(|localStorage|sessionStorage/);
  assert.match(page, /linkedin\.com\/company\/140013922\//);
  assert.match(page, /linkedin\.com\/company\/137603901\//);
  assert.doesNotMatch(page, /\/admin\/page-posts\//);
  assert.match(layout, /openGraph/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
