import { LeadForm } from "./LeadForm";

const capabilities = [
  "אוטומציה של משימות ותהליכים שחוזרים על עצמם",
  "בניית סוכני AI וכלים ייעודיים לעסק",
  "שיפור תהליכי שירות ומענה ללקוחות",
  "עבודה יעילה יותר עם מסמכים ומידע",
  "הפקת דוחות, סיכומים וניתוח נתונים",
  "ייעול תהליכי מכירה ושיווק",
  "בניית תהליכי עבודה פנימיים חכמים יותר",
  "חיבור בין מערכות וכלים קיימים",
  "בניית פתרונות AI שמותאמים לצורך ספציפי בעסק",
];

const processSteps = [
  {
    title: "מכירים ומאפיינים את העסק",
    paragraphs: [
      "אני נכנס לעומק של העסק, האנשים ותהליכי העבודה ומבין איך הדברים עובדים היום.",
    ],
  },
  {
    title: "ממפים את ההזדמנויות",
    paragraphs: [
      "אני מזהה איפה AI יכול לחסוך זמן וכסף, לצמצם עבודה ידנית, לשפר תהליכים או לפתוח אפשרויות חדשות.",
      "ומצד שני — גם איפה אין צורך לשנות את מה שכבר עובד.",
    ],
  },
  {
    title: "בוחרים מה באמת כדאי לעשות",
    paragraphs: [
      "לא רשימה אינסופית של רעיונות.",
      "מגדירים סדרי עדיפויות ומחליטים אילו פתרונות יתנו לעסק את הערך הגדול ביותר ביחס לזמן ולהשקעה.",
    ],
  },
  {
    title: "בונים ומטמיעים",
    paragraphs: [
      "אני מתאים ובונה את הכלים, האוטומציות והמערכות הנדרשות ומחבר אותם ככל האפשר לצורת העבודה הקיימת בעסק.",
    ],
  },
  {
    title: "מדריכים את האנשים",
    paragraphs: [
      "טכנולוגיה טובה היא טכנולוגיה שאנשים באמת משתמשים בה.",
      "לכן התהליך כולל גם הדרכה והטמעה, כדי שהפתרונות יהפכו לחלק טבעי מהעבודה.",
    ],
  },
  {
    title: "ממשיכים לשפר",
    paragraphs: [
      "אחרי שמתחילים לעבוד, בודקים מה עובד, מה אפשר לדייק ואיפה נמצאת ההזדמנות הבאה.",
    ],
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

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="ניווט ראשי">
        <a className="header-wordmark" href="#top" aria-label="NY AI Solutions — לראש העמוד">
          <strong>NY</strong>
          <span>AI SOLUTIONS</span>
        </a>
        <nav className="header-nav" aria-label="קישורי עמוד">
          <a href="#approach">הגישה</a>
          <a href="#capabilities">מה אפשר לעשות</a>
          <a href="#process">התהליך</a>
          <a href="#about">למה נדב</a>
        </nav>
        <a className="header-cta" href="#contact">בואו נדבר</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">NY AI SOLUTIONS</p>
          <h1>
            AI יכול לעשות הרבה יותר
            <span>בעסק שלכם.</span>
          </h1>
          <p className="hero-lead">אתם פשוט לא צריכים להפוך למומחי AI כדי שזה יקרה.</p>
          <div className="hero-opening">
            <p>כולם מדברים היום על AI.</p>
            <p>כל שבוע יוצא עוד כלי, עוד מערכת, עוד אפשרות חדשה ש”אתם חייבים להכיר”.</p>
            <p>אבל כבעלי עסק, אתם לא באמת צריכים להכיר הכול.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">בואו נדבר</a>
            <a className="text-link" href="#approach">איך AI יכול לעבוד בשבילכם? ←</a>
          </div>
        </div>

        <div className="hero-stage">
          <BusinessCard />
          <div className="value-flow" aria-label="מהעסק לפתרון AI מעשי">
            <p className="value-flow-label">BUSINESS FIRST</p>
            <div><span>01</span><p>מבינים איך העסק עובד היום</p></div>
            <div><span>02</span><p>מזהים איפה AI מייצר ערך אמיתי</p></div>
            <div><span>03</span><p>בונים, מטמיעים וממשיכים לשפר</p></div>
          </div>
        </div>
      </section>

      <section className="story-section section-shell" aria-labelledby="expert-title">
        <div className="section-heading">
          <p className="section-label">אתם לא צריכים להכיר הכול</p>
          <h2 id="expert-title">אתם מומחים במה שאתם עושים.</h2>
        </div>
        <div className="story-grid">
          <div className="copy-stack copy-stack-large">
            <p>בביטוח, באופנה, בעריכת דין, בנדל”ן, בכספים, בשירותים או בכל תחום אחר שבניתם בו עסק.</p>
            <p><strong>אתם לא צריכים להיות עכשיו גם מומחי AI.</strong></p>
            <p>אתם כן צריכים לדעת שיש היום טכנולוגיה שיכולה לחסוך לכם זמן, לייעל תהליכים, לצמצם עבודה ידנית ולעזור לעסק שלכם לעבוד טוב יותר.</p>
          </div>
          <aside className="question-card">
            <span>והשאלה היא:</span>
            <h3>איפה AI באמת יכול לעזור דווקא לעסק שלכם?</h3>
            <p>בשביל זה אני כאן.</p>
          </aside>
        </div>
        <div className="promise-panel">
          <p>אני לומד את העסק שלכם, מבין איך אתם עובדים היום, מזהה איפה AI יכול לייצר ערך אמיתי — ואז בונה ומטמיע את הפתרונות המתאימים.</p>
          <div>
            <p>בלי שתצטרכו לרדוף אחרי כל כלי חדש.</p>
            <p>בלי להשקיע שעות בללמוד מערכות שלא בטוח שאתם בכלל צריכים.</p>
          </div>
          <strong>אתם תמשיכו להתמחות בעסק שלכם.<br />אני אדאג להבין איך AI יכול לעבוד בשבילו.</strong>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="section-shell approach-layout">
          <div className="section-heading section-heading-light">
            <p className="section-label section-label-light">הגישה</p>
            <h2 id="approach-title">מתחילים מהעסק.<br />לא מהטכנולוגיה.</h2>
          </div>
          <div className="copy-stack approach-copy">
            <p>לפני שמדברים על כלים, אוטומציות או מערכות, אני רוצה להבין את העסק.</p>
            <ul className="question-list">
              <li>איך אתם עובדים היום?</li>
              <li>אילו משימות גוזלות מכם ומהעובדים שלכם זמן?</li>
              <li>איפה יש עבודה ידנית שחוזרת על עצמה?</li>
              <li>איפה נוצרים עומס או צווארי בקבוק?</li>
              <li>באילו מערכות אתם כבר משתמשים?</li>
              <li>ומה הייתם רוצים שיעבוד טוב יותר?</li>
            </ul>
            <p>רק אחרי שמבינים את זה, אפשר לבדוק איפה AI באמת יכול לעזור.</p>
            <p>כי לא כל דבר צריך להפוך לאוטומטי, ולא כל טכנולוגיה חדשה מתאימה לכל עסק.</p>
          </div>
        </div>
        <div className="section-shell principle-statement">
          <span aria-hidden="true">“</span>
          <p>המטרה היא לא להכניס AI לעסק.<strong>המטרה היא לגרום לעסק לעבוד טוב יותר בעזרת AI.</strong></p>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-shell">
          <div className="section-heading compact-heading">
            <p className="section-label">האפשרויות</p>
            <h2 id="capabilities-title">מה AI יכול לעשות בעסק שלכם?</h2>
            <p>התשובה משתנה מעסק לעסק.</p>
            <p>זה יכול להיות:</p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <article key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{capability}</p>
              </article>
            ))}
          </div>
          <div className="small-change-note">
            <p>ולפעמים לא צריך לבנות מערכת גדולה.</p>
            <strong>כמה שינויים חכמים בתהליכים שחוזרים על עצמם יכולים לחסוך לעסק ולעובדים שעות של עבודה בכל שבוע.</strong>
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="process" aria-labelledby="process-title">
        <div className="section-heading compact-heading">
          <p className="section-label">התהליך</p>
          <h2 id="process-title">איך זה עובד?</h2>
        </div>
        <div className="process-list">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <div>
                {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-shell about-layout">
          <div className="section-heading section-heading-light">
            <p className="section-label section-label-light">למה נדב</p>
            <h2 id="about-title">אתם לא צריכים לעקוב אחרי עולם ה־AI.</h2>
            <p className="about-role">זה התפקיד שלי.</p>
          </div>
          <div className="copy-stack about-copy">
            <p><strong>אני נדב יגאל.</strong></p>
            <p>בעל תואר ראשון בכלכלה וניהול עסקים, עם ניסיון מקצועי בייעוץ, בנקאות וניהול סיכונים.</p>
            <p>בשנתיים האחרונות אני מתמחה בעולם ה־AI — לומד, חוקר ועובד באופן מעמיק עם הכלים והטכנולוגיות החדשות.</p>
            <p>במקביל, תכננתי, בניתי ופיתחתי שתי אפליקציות מבוססות AI שנמצאות כיום בתהליך השקה.</p>
            <div className="three-worlds">
              <span>הבנה עסקית.</span>
              <span>ניסיון ייעוצי.</span>
              <span>ויכולת לקחת טכנולוגיה ולהפוך אותה לפתרון מעשי.</span>
            </div>
            <p>מבחינתי, בעל עסק לא צריך לדעת מה המודל החדש שיצא השבוע, איזו מערכת מתאימה לאיזו משימה או איך לחבר בין עשרה כלים שונים.</p>
            <p><strong>זו העבודה שלי.</strong></p>
            <p><strong>העבודה שלכם היא לנהל את העסק ולהמשיך להיות טובים במה שאתם עושים.</strong></p>
          </div>
        </div>

        <div className="section-shell product-proof" aria-label="אפליקציות AI שבנה נדב">
          <article>
            <span>LIVE IOS APP</span>
            <h3>RunSmart</h3>
            <div className="proof-links">
              <a href="https://apps.apple.com/il/app/runsmart-ai-run-coaching/id6768297840" target="_blank" rel="noopener noreferrer">App Store</a>
              <a href="https://www.facebook.com/profile.php?id=61593058382655" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/140013922/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
          <article>
            <span>LIVE IOS APP</span>
            <h3>Resumely</h3>
            <div className="proof-links">
              <a href="https://apps.apple.com/il/app/resume-ai-cv-builder/id6776752349" target="_blank" rel="noopener noreferrer">App Store</a>
              <a href="https://www.facebook.com/profile.php?id=61593060242562" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/137603901/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-label section-label-light">אז איפה מתחילים?</p>
            <h2 id="contact-title">אז איפה AI יכול לעבוד בשביל העסק שלכם?</h2>
            <div className="copy-stack">
              <p>אפשר להתחיל בפגישת מיפוי ואפיון.</p>
              <p>נכיר את העסק ואת תהליכי העבודה, נזהה את המקומות שבהם AI יכול לייצר את הערך המשמעותי ביותר ונבין מה נכון לעשות — ומה לא.</p>
              <p>ומשם, במידת הצורך, נמשיך לבנייה, הטמעה והדרכה.</p>
              <p><strong>AI הוא לא עוד משהו שאתם צריכים להספיק ללמוד.<br />הוא כלי שאמור לעבוד בשבילכם.</strong></p>
            </div>
            <a className="button button-light direct-cta" href="https://wa.me/972545333773" target="_blank" rel="noopener noreferrer">בואו נדבר</a>
            <div className="contact-direct">
              <a href="https://wa.me/972545333773" target="_blank" rel="noopener noreferrer">WhatsApp: 054-533-3773</a>
              <a href="mailto:nadav.yigal@gmail.com">nadav.yigal@gmail.com</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-wordmark"><strong>NY</strong><span>AI SOLUTIONS</span></div>
          <div><p>Making AI work for your business.</p><span>© {new Date().getFullYear()} NY AI Solutions · Nadav Yigal</span></div>
          <a href="#top">חזרה למעלה ↑</a>
        </div>
      </footer>
    </main>
  );
}
