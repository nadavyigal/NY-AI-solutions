import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "../LeadForm";
import { outcomes } from "../outcomes";

export const metadata: Metadata = {
  title: "NY AI Solutions | למה העסק צריך את זה",
  description:
    "כי הזמן של האנשים יקר, כי תהליכים יכולים לעבוד טוב יותר, וכי AI פותח לעסק אפשרויות חדשות — כשהוא יושב בנתיב שלכם.",
};

const reasons = [
  {
    title: "כי הזמן של האנשים יקר",
    body: "הצוות הוא לא משאב שאפשר לבזבז על עבודה שחוזרת על עצמה. כל שעה שחוזרת ללקוח, להחלטה או לצמיחה — העסק מרגיש מיד.",
  },
  {
    title: "כי תהליכים טובים יותר משחררים את העסק",
    body: "ייעול הוא לא קיצור שפוגע באיכות. זה יום עבודה שרץ חלק יותר: פחות צווארי בקבוק, פחות המתנה, יותר קצב במה שחשוב באמת.",
  },
  {
    title: "כי אפשר לגלות אפשרויות שהעסק עוד לא מימש",
    body: "AI לא רק מזרז את מה שכבר קיים. הוא פותח דרכים חדשות לשרת לקוחות, להבין נתונים, ולבנות הצעות שהעסק לא יכול היה להחזיק קודם — בלי להכפיל את הצוות.",
  },
  {
    title: "כי AI צריך ללכת בנתיב של העסק שלכם",
    body: "לא כתוספת בצד, אלא כחלק מהדרך שבה אתם עובדים ומתקדמים. כדי שהטכנולוגיה תשרת את הכיוון שלכם — לא תמשוך אתכם לכיוון שלה.",
  },
];

const contrasts = [
  {
    title: "למה לא לבד",
    body: "תשומת הלב שלכם שייכת לעסק. כשלומדים כל כלי לבד, הזמן הזה יורד מהניהול, מהלקוחות ומהצמיחה.",
  },
  {
    title: "למה לא AI בצד",
    body: "כלי שלא נכנס לנתיב העבודה לא משנה את העסק. הערך נוצר רק כשהוא יושב בתהליך האמיתי.",
  },
  {
    title: "למה מישהו שמבין את העסק",
    body: "כי החיבור נעשה מתוך מה שאתם כבר עושים ולאן שאתם הולכים — לא מתוך רשימת טכנולוגיות.",
  },
];

function BusinessCard() {
  return (
    <div className="business-card" role="img" aria-label="NY AI Solutions — Making AI work for your business">
      <img src="/favicon.png" alt="" width="512" height="512" />
      <div className="business-card-name">
        <span />
        <strong>AI SOLUTIONS</strong>
        <span />
      </div>
      <p>Making AI work for your business.</p>
    </div>
  );
}

export default function BenefitsPage() {
  return (
    <main className="benefits-page">
      <header className="site-header" aria-label="ניווט ראשי">
        <a className="header-wordmark" href="#top" aria-label="NY AI Solutions — לראש העמוד">
          <strong>NY</strong>
          <span>AI SOLUTIONS</span>
        </a>
        <nav className="header-nav" aria-label="קישורי עמוד">
          <a href="#takeaway">מה תצאו מזה</a>
          <a href="#why">למה זה חשוב</a>
          <a href="#instead">למה דווקא ככה</a>
          <a href="#proof">למה אפשר לסמוך</a>
          <Link href="/">הגרסה המלאה</Link>
        </nav>
        <a className="header-cta" href="#contact">בואו נדבר</a>
      </header>

      <section className="hero benefits-hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">למה העסק צריך את זה</p>
          <h1>
            כי אתם לא צריכים מומחה AI.
            <span>אתם צריכים ש־AI יעבוד בשביל העסק.</span>
          </h1>
          <p className="hero-lead">הזמן של האנשים הוא המשאב היקר ביותר בעסק. כש־AI מחובר לתהליכים האמיתיים — העבודה זורמת טוב יותר, ונפתחות אפשרויות שהעסק עוד לא מימש.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">בואו נדבר</a>
            <a className="text-link" href="#why">למה זה חשוב עכשיו ←</a>
          </div>
        </div>

        <div className="hero-stage">
          <BusinessCard />
          <div className="value-flow" aria-label="למה זה חשוב">
            <p className="value-flow-label">WHY IT MATTERS</p>
            <div><span>01</span><p>הזמן של האנשים יקר</p></div>
            <div><span>02</span><p>נפתחות הזדמנויות חדשות</p></div>
            <div><span>03</span><p>AI בנתיב של העסק, לא לידו</p></div>
          </div>
        </div>
      </section>

      <section className="takeaway-section section-shell" id="takeaway" aria-labelledby="takeaway-title">
        <div className="section-heading compact-heading">
          <p className="section-label">התוצאה, לא רשימת הכלים</p>
          <h2 id="takeaway-title">עם מה תצאו מהתהליך.</h2>
          <p className="section-intro">אלה הדברים שהתהליך מכוון אליהם. מה מתוכם רלוונטי לכם — נקבע לפי העסק שלכם, לא לפי רשימה אחידה.</p>
        </div>
        <ul className="takeaway-list">
          {outcomes.map((outcome) => (
            <li key={outcome.title}>
              <strong>{outcome.title}</strong>
              <span>{outcome.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="outcomes-section section-shell" id="why" aria-labelledby="why-title">
        <div className="section-heading compact-heading">
          <p className="section-label">הסיבה, לא השיטה</p>
          <h2 id="why-title">ארבע סיבות שהעסק מרגיש כבר עכשיו.</h2>
          <p className="section-intro">לא רשימת פיצ׳רים. לא תהליך. למה העסק מרוויח כש־AI יושב בזמן, בתהליכים ובנתיב שלכם.</p>
        </div>
        <div className="outcome-grid">
          {reasons.map((reason, index) => (
            <article key={reason.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
        <div className="outcome-close">
          <p>אתם ממשיכים להתמחות בעסק.</p>
          <strong>אני דואג ש־AI יעבוד בשבילו — כי זה לא התפקיד שלכם.</strong>
        </div>
      </section>

      <section className="short-how-section" id="instead" aria-labelledby="instead-title">
        <div className="section-shell">
          <div className="section-heading section-heading-light compact-heading">
            <p className="section-label section-label-light">למה דווקא ככה</p>
            <h2 id="instead-title">כי AI שווה משהו רק כשהוא הולך בדרך של העסק — לא כשהוא יושב בצד.</h2>
            <p className="section-intro section-intro-light">לכן השירות הזה קיים: לחבר את הטכנולוגיה לזמן, לתהליכים ולהזדמנויות שלכם — בלי שתיקחו את זה על עצמכם.</p>
          </div>
          <div className="short-process">
            {contrasts.map((item) => (
              <article key={item.title}>
                <span>כי</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="short-how-close">המטרה היא לא להכניס AI לעסק. המטרה היא לגרום לעסק לעבוד טוב יותר בעזרת AI.</p>
        </div>
      </section>

      <section className="compact-proof-section" id="proof" aria-labelledby="proof-title">
        <div className="section-shell compact-proof-copy">
          <p className="section-label">למה אפשר לסמוך על זה</p>
          <h2 id="proof-title">כי ייעוץ בלי ביצוע הוא בדיוק הסיבה שרוב פרויקטי ה־AI נתקעים.</h2>
          <p>נדב יגאל מחבר הבנה עסקית עם יכולת לבנות. שתי אפליקציות iOS מבוססות AI כבר חיות ב־App Store — לא כהדגמה, אלא כהוכחה שהעבודה מגיעה לידיים של אנשים אמיתיים.</p>
        </div>
        <div className="section-shell product-proof compact-product-proof" aria-label="מוצרים לדוגמה">
          <article>
            <div className="product-logo product-logo-runsmart">
              <img src="/runsmart-logo.png" alt="לוגו RunSmart" width="900" height="272" />
            </div>
            <span>AI RUN COACHING · LIVE ON THE APP STORE</span>
            <p>כי רעיון בלי מוצר חי לא משנה כלום למשתמש.</p>
            <div className="proof-links">
              <a className="app-store-link" href="https://apps.apple.com/il/app/runsmart-ai-run-coaching/id6768297840" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
            </div>
          </article>
          <article>
            <div className="product-logo product-logo-resumely">
              <img src="/resumely-logo.png" alt="לוגו Resumely" width="920" height="200" />
            </div>
            <span>AI RESUME BUILDER · LIVE ON THE APP STORE</span>
            <p>כי תהליך ברור הוא מה שהופך AI לשימושי, לא למרשים.</p>
            <div className="proof-links">
              <a className="app-store-link" href="https://apps.apple.com/il/app/resume-ai-cv-builder/id6776752349" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-label section-label-light">למה להתחיל בשיחה</p>
            <h2 id="contact-title">כי מספיקה בעיה אחת אמיתית כדי להרגיש את ההבדל.</h2>
            <div className="copy-stack">
              <p><strong>לא צריך תוכנית שינוי גדולה. צריך מקום אחד שבו הזמן יקר, התהליך יכול לעבוד טוב יותר, או שנפתחת הזדמנות שהעסק עוד לא לקח.</strong></p>
              <p>משם נבין אם AI באמת יכול לעזור — ומה לא שווה לגעת בו.</p>
              <p><strong>AI הוא לא עוד משהו שצריך להספיק ללמוד. הוא כלי שאמור לעבוד בשבילכם.</strong></p>
            </div>
            <a className="button button-light direct-cta" href="https://wa.me/972545333773" target="_blank" rel="noopener noreferrer">בואו נדבר</a>
            <div className="contact-direct">
              <a href="https://wa.me/972545333773" target="_blank" rel="noopener noreferrer">WhatsApp: 054-533-3773</a>
              <a href="mailto:nadav.yigal@gmail.com">nadav.yigal@gmail.com</a>
              <Link href="/">לגרסה המלאה של האתר ←</Link>
            </div>
          </div>
          <LeadForm sourceLine="שלום נדב, הגעתי דרך גרסת היתרונות באתר NY AI Solutions." />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-wordmark"><strong>NY</strong><span>AI SOLUTIONS</span></div>
          <div><p>Making AI work for your business.</p><span>© {new Date().getFullYear()} NY AI Solutions · Nadav Yigal</span></div>
          <Link href="/">לגרסה המלאה ←</Link>
        </div>
      </footer>
    </main>
  );
}
