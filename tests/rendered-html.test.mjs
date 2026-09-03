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

test("server-renders the Hebrew NY AI Solutions landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="he"[^>]*dir="rtl"/i);
  assert.match(html, /AI יכול לעשות הרבה יותר/);
  assert.match(html, /מפתרון נקודתי וחכם ועד מערכת AI שלמה/);
  assert.match(html, /אתם מביאים את המומחיות העסקית/);
  assert.match(html, /המידע של הלקוחות שלכם לא נכנס ל־AI/);
  assert.match(html, /זו פרקטיקת ארכיטקטורה/);
  assert.match(html, /AI Value Sprint/);
  assert.match(html, /7–10 ימי עסקים/);
  assert.match(html, /בסוף יש תהליך אחד שעובד — לא מצגת/);
  assert.doesNotMatch(html, /מחיר|₪/);
  assert.match(html, /מיפוי ושיפור של תהליכים ידניים/);
  assert.equal((html.match(/class="[^"]*capabilities-grid[^"]*"/g) ?? []).length, 1);
  assert.equal((html.match(/<article><span>0[1-5]<\/span><p>/g) ?? []).length, 5);
  assert.match(html, /מבינים את העסק ואת האנשים/);
  assert.match(html, /לא רק להמליץ על פתרון/);
  assert.match(html, /מוצרים לדוגמה/);
  assert.match(html, /שתי אפליקציות מבוססות AI/);
  assert.match(html, /בעולמות תוכן שונים/);
  assert.match(html, /השקתי ב־App Store/);
  assert.match(html, /לא נטען כאן ל־ROI, כי לא נמדד קו בסיס/);
  assert.match(html, /פיתוח מוצרי iOS מופיע כאן כהוכחה/);
  assert.match(html, /href="\/benefits"/);
  assert.match(html, /Agentic OS/);
  assert.match(html, /AI SOLUTIONS/);
  assert.doesNotMatch(html, /AI CONSULTING/i);
  assert.match(html, /RunSmart/);
  assert.match(html, /Resumely/);
  assert.match(html, /\/runsmart-logo\.png/);
  assert.match(html, /\/resumely-logo\.png/);
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
  assert.doesNotMatch(page, /<h3>RunSmart<\/h3>/);
  assert.doesNotMatch(page, /<h3>Resumely<\/h3>/);
  assert.equal((page.match(/src="\/favicon\.png"/g) ?? []).length, 1);
  assert.doesNotMatch(page, /logo-on-(light|dark)\.png/);
  assert.match(layout, /openGraph/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("server-renders the shorter Hebrew benefits landing page", async () => {
  const response = await render("/benefits");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="he"[^>]*dir="rtl"/i);
  assert.match(html, /כי אתם לא צריכים מומחה AI/);
  assert.match(html, /אתם צריכים ש־AI יעבוד בשביל העסק/);
  assert.match(html, /כי הזמן של האנשים יקר/);
  assert.match(html, /כי אפשר לגלות אפשרויות שהעסק עוד לא מימש/);
  assert.match(html, /כי AI צריך ללכת בנתיב של העסק שלכם/);
  assert.doesNotMatch(html, /מזיזים את המחט/);
  assert.doesNotMatch(html, /כלי שאף אחד לא משתמש/);
  assert.match(html, /כי מספיקה בעיה אחת אמיתית/);
  assert.match(html, /גרסת היתרונות/);
  assert.match(html, /RunSmart/);
  assert.match(html, /Resumely/);
  assert.match(html, /972545333773/);
  assert.doesNotMatch(html, /מפתרון נקודתי וחכם ועד מערכת AI שלמה/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|admin\/page-posts/i);
});
