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
  assert.match(html, /עם מה תצאו מהתהליך/);
  assert.match(html, /חיסכון משמעותי בזמן/);
  assert.match(html, /עסק יעיל, מתקדם ותחרותי יותר/);
  assert.equal((html.match(/class="outcome-grid"/g) ?? []).length, 1);
  assert.equal((html.match(/<article><span>\d\d<\/span><h3>/g) ?? []).length, 10);
  assert.ok(html.indexOf('id="approach"') < html.indexOf('id="outcomes"'));
  assert.ok(html.indexOf('id="outcomes"') < html.indexOf('id="offer"'));
  assert.match(html, /<article><span>01<\/span><h3>פתרונות AI שמותאמים לעסק עצמו<\/h3>/);
  assert.match(html, /בסוף השיחה תהיה לכם תמונה ברורה יותר של האפשרויות ושל הצעד הבא שנכון לעסק/);
  assert.match(html, /ספרו לי איך אתם עובדים היום ולאן הייתם רוצים להגיע/);
  assert.doesNotMatch(html, /בלי מצגת ובלי מסלול מכירה נוסף/);
  assert.doesNotMatch(html, /ספרו לי מה כבר קניתם ואיזה תהליך עדיין מכביד/);
  assert.doesNotMatch(html, /מחיר|₪/);
  assert.doesNotMatch(html, /אתם פשוט לא צריכים/);
  assert.doesNotMatch(html, /המידע של הלקוחות שלכם לא נכנס ל־AI/);
  assert.doesNotMatch(html, /תהליכי עבודה שמתקדמים בלי לאבד שליטה/);
  assert.doesNotMatch(html, /תהליך מסודר, החלטות ברורות/);
  assert.doesNotMatch(html, /AI Value Sprint|7–10 ימי עסקים/);
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
  assert.equal((page.match(/src="\/favicon\.png"/g) ?? []).length, 0);
  assert.doesNotMatch(page, /logo-on-(light|dark)\.png/);
  assert.match(layout, /openGraph/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("server-renders the restored full landing page at the benefits URL", async () => {
  const response = await render("/benefits");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="he"[^>]*dir="rtl"/i);
  assert.match(html, /פתרונות AI לעסקים/);
  assert.match(html, /AI יכול לעשות הרבה יותר/);
  assert.match(html, /בעסק שלכם/);
  assert.match(html, /מפתרון נקודתי וחכם ועד מערכת AI שלמה/);
  assert.match(html, /אתם לא צריכים להפוך למומחי AI כדי שזה יקרה/);
  assert.match(html, /כל שבוע יוצא עוד כלי, עוד מערכת, עוד אפשרות חדשה/);
  assert.match(html, /אבל כבעלי עסק, אתם לא באמת צריכים להכיר הכול/);
  assert.match(html, /עם מה תצאו מהתהליך/);
  assert.match(html, /שיפור איכות ודיוק העבודה/);
  assert.match(html, /פתרונות AI שמותאמים לעסק עצמו/);
  assert.match(html, /RunSmart/);
  assert.match(html, /Resumely/);
  assert.match(html, /972545333773/);
  assert.doesNotMatch(html, /כי אתם לא צריכים מומחה AI/);
  assert.doesNotMatch(html, /אתם פשוט לא צריכים/);
  assert.doesNotMatch(html, /המידע של הלקוחות שלכם לא נכנס ל־AI/);
  assert.doesNotMatch(html, /תהליכי עבודה שמתקדמים בלי לאבד שליטה/);
  assert.doesNotMatch(html, /תהליך מסודר, החלטות ברורות/);
  assert.doesNotMatch(html, /AI Value Sprint|7–10 ימי עסקים/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|admin\/page-posts/i);
});
