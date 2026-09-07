import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function renderedHtml(path) {
  const response = await render(path);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

function assertRewrittenPage(html) {
  assert.match(html, /<html[^>]*lang="he"[^>]*dir="rtl"/i);
  assert.match(html, /AI יכול לעשות הרבה יותר/);
  assert.match(html, /כבעלי עסק, אתם לא צריכים להכיר כל כלי חדש שיוצא/);
  assert.match(html, /איך זה עובד\?/);
  assert.match(html, /ממפים את תהליכי העבודה, המשימות והמערכות הקיימות/);
  assert.match(html, /איפה אפשר לחסוך זמן, להפחית עבודה ידנית, לשפר שירות או להגדיל תפוקה/);
  assert.match(html, /מתאימים את הפתרון לעסק ודואגים שהוא באמת ישתלב בעבודה היומיומית/);
  assert.equal((html.match(/class="short-process"/g) ?? []).length, 1);

  assert.match(html, /קודם מבינים את העבודה/);
  assert.match(html, /מה גוזל מכם ומהעובדים שלכם זמן/);
  assert.match(html, /המטרה היא לגרום לעסק לעבוד טוב יותר בעזרת AI/);

  assert.match(html, /עם מה תצאו מהתהליך\?/);
  assert.equal((html.match(/class="outcome-grid"/g) ?? []).length, 1);
  assert.equal((html.match(/<article><span>0[1-5]<\/span><h3>/g) ?? []).length, 8);
  assert.match(html, /חיסכון בזמן ובעלויות/);
  assert.match(html, /פתרונות שמוטמעים בעסק/);
  assert.match(html, /לא רק המלצות — אלא פתרונות שמותאמים לעסק ומשתלבים בעבודה בפועל/);

  assert.match(html, /אני עוזר לעסקים להפוך את האפשרויות של AI לפתרונות מעשיים שעובדים בתוך העסק/);
  assert.match(html, /פיתוח עסקי ובנקאות גלובלית/);
  assert.match(html, /בשנים האחרונות אני עובד באופן מעשי עם AI/);
  assert.match(html, /משלב הרעיון ועד למוצר עובד/);
  assert.match(html, /החיבור בין הבנה עסקית ליכולת הטכנולוגית/);

  assert.match(html, /href="#outcomes"/);
  assert.match(html, /972545333773/);
  assert.doesNotMatch(html, /איפה AI באמת יכול לעזור דווקא לעסק שלכם\? בשביל זה אני כאן/);
  assert.doesNotMatch(html, /כולם מדברים היום על AI/);
  assert.doesNotMatch(html, /כל שבוע יוצא עוד כלי/);
  assert.doesNotMatch(html, /אתם מביאים את המומחיות העסקית/);
  assert.doesNotMatch(html, /דוגמה אנונימית מהשטח/);
  assert.doesNotMatch(html, /מוצרים לדוגמה|RunSmart|Resumely|Agentic OS/);
  assert.doesNotMatch(html, /מחיר|₪|AI Value Sprint|7–10 ימי עסקים/);
}

test("server-renders the shortened Hebrew landing page", async () => {
  assertRewrittenPage(await renderedHtml("/"));
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
  assert.doesNotMatch(page, /\/admin\/page-posts\//);
  assert.equal((page.match(/src="\/favicon\.png"/g) ?? []).length, 0);
  assert.match(layout, /openGraph/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("server-renders the same shortened page at the benefits URL", async () => {
  assertRewrittenPage(await renderedHtml("/benefits"));
});
