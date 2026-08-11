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
  "תכנון ופיתוח אפליקציות iOS מבוססות AI — מהרעיון ועד מוצר חי ב־App Store",
];

const processSteps = [
  {
    title: "מבינים את העסק ואת האנשים",
    paragraphs: [
      "אני נכנס לעומק של העסק, האנשים ותהליכי העבודה ומבין איך הדברים עובדים היום.",
    ],
  },
  {
    title: "מזהים הזדמנויות עם ערך אמיתי",
    paragraphs: [
      "אני מזהה איפה AI יכול לחסוך זמן וכסף, לצמצם עבודה ידנית, לשפר תהליכים או לפתוח אפשרויות חדשות.",
      "ומצד שני — גם איפה אין צורך לשנות את מה שכבר עובד.",
    ],
  },
  {
    title: "מתעדפים את מה שכדאי לעשות עכשיו",
    paragraphs: [
      "לא רשימה אינסופית של רעיונות.",
      "מגדירים סדרי עדיפויות ומחליטים אילו פתרונות יתנו לעסק את הערך הגדול ביותר ביחס לזמן ולהשקעה.",
    ],
  },
  {
    title: "בונים ומחברים לסביבת העבודה",
    paragraphs: [
      "אני מתאים ובונה את הכלים, האוטומציות והמערכות הנדרשות ומחבר אותם ככל האפשר לצורת העבודה הקיימת בעסק.",
    ],
  },
  {
    title: "מטמיעים עם האנשים, לא מעליהם",
    paragraphs: [
      "טכנולוגיה טובה היא טכנולוגיה שאנשים באמת משתמשים בה.",
      "לכן התהליך כולל גם הדרכה והטמעה, כדי שהפתרונות יהפכו לחלק טבעי מהעבודה.",
    ],
  },
  {
    title: "מודדים, לומדים ומשפרים",
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
          <a href="#capabilities">הפתרונות</a>
          <a href="#process">התהליך</a>
          <a href="#about">אודות</a>
          <a href="#products">מוצרים לדוגמה</a>
        </nav>
        <a className="header-cta" href="#contact">בואו נדבר</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">פתרונות AI לעסקים</p>
          <h1>
            AI יכול לעשות הרבה יותר
            <span>בעסק שלכם.</span>
          </h1>
          <p className="hero-lead">מפתרון נקודתי וחכם ועד מערכת AI שלמה — בהתאם למה שהעסק באמת צריך.</p>
          <div className="hero-opening">
            <p className="hero-opening-emphasis">אתם פשוט לא צריכים להפוך למומחי AI כדי שזה יקרה.</p>
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
          <p className="section-label">העסק שלכם הוא נקודת המוצא</p>
          <h2 id="expert-title">אתם מביאים את המומחיות העסקית.<br />אני מחבר אליה את ה־AI.</h2>
          <p className="section-intro">במקום ללמוד כל כלי חדש, מתחילים במה שאתם כבר יודעים הכי טוב: איך העסק שלכם עובד ואיפה הוא יכול לעבוד טוב יותר.</p>
        </div>
        <div className="story-grid">
          <div className="copy-stack copy-stack-large">
            <p>בביטוח, באופנה, בעריכת דין, בנדל”ן, בכספים, בשירותים או בכל תחום אחר שבניתם בו עסק.</p>
            <p><strong>אתם לא צריכים להיות עכשיו גם מומחי AI.</strong></p>
            <p>אתם כן צריכים לדעת שיש היום טכנולוגיה שיכולה לחסוך לכם זמן, לייעל תהליכים, לצמצם עבודה ידנית ולעזור לעסק שלכם לעבוד טוב יותר.</p>
          </div>
          <aside className="question-card">
            <span>ההזדמנות העסקית</span>
            <h3>למצוא איפה AI יכול לחסוך זמן, להפחית עומס ולשפר את העבודה.</h3>
            <p>איפה AI באמת יכול לעזור דווקא לעסק שלכם? בשביל זה אני כאן.</p>
          </aside>
        </div>
        <div className="promise-panel">
          <div className="promise-main">
            <h3>מתרגמים צורך עסקי לפתרון שעובד.</h3>
            <p>אני לומד את העסק שלכם, מבין איך אתם עובדים היום, מזהה איפה AI יכול לייצר ערך אמיתי — ואז בונה ומטמיע את הפתרונות המתאימים.</p>
          </div>
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
            <p className="section-label section-label-light">מיפוי לפני פיתוח</p>
            <h2 id="approach-title">קודם מבינים את העבודה.<br />אחר כך בוחרים את הטכנולוגיה.</h2>
            <p className="section-intro section-intro-light">הפתרון הטוב ביותר אינו בהכרח הכלי החדש ביותר — אלא זה שמתאים לתהליך, לאנשים ולמטרות של העסק.</p>
          </div>
          <div className="copy-stack approach-copy">
            <p><strong>מתחילים מהעסק. לא מהטכנולוגיה.</strong></p>
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
            <p className="section-label">פתרונות בהתאמה לעסק</p>
            <h2 id="capabilities-title">מהתייעלות יומיומית ועד מוצר AI שלם.</h2>
            <p className="section-intro">לא כל צורך דורש מערכת גדולה. לפעמים השיפור הנכון הוא אוטומציה אחת; לפעמים זה סוכן AI, חיבור בין מערכות או אפליקציית iOS ייעודית.</p>
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
          <p className="section-label">מהצורך לתוצאה</p>
          <h2 id="process-title">תהליך מסודר, החלטות ברורות והטמעה שאנשים מאמצים.</h2>
          <p className="section-intro">לא מתחילים מרשימת רעיונות אינסופית. מתקדמים שלב אחר שלב, מהבנת העבודה ועד פתרון שמשתלב בה.</p>
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
            <p className="section-label section-label-light">ניסיון עסקי + יכולת ביצוע</p>
            <h2 id="about-title">לא רק להמליץ על פתרון.<br />לדעת גם לבנות אותו.</h2>
            <p className="about-role">ייעוץ עסקי, AI ופיתוח מוצר — באותו תהליך.</p>
          </div>
          <div className="copy-stack about-copy">
            <p><strong>אני נדב יגאל, ואני עוזר לעסקים להפוך את האפשרויות של AI לפתרונות מעשיים שאנשים באמת יכולים לעבוד איתם.</strong></p>
            <p>אני בעל תואר ראשון בכלכלה וניהול עסקים, עם ניסיון מקצועי בייעוץ, בנקאות וניהול סיכונים. הרקע הזה לימד אותי להסתכל על טכנולוגיה דרך שאלות עסקיות: מה הבעיה שאנחנו פותרים, מה הערך הצפוי, מה הסיכון, ואיך נדע שהפתרון באמת עובד.</p>
            <p>בשנתיים האחרונות אני עובד באופן מעמיק ומעשי עם AI — מחקר ובחירת כלים, תכנון תהליכי עבודה, בניית סוכנים ואוטומציות, בדיקות איכות וסיכון, ופיתוח מערכות ומוצרים.</p>
            <p>כדי להפוך את העבודה הזאת לשיטתית בניתי גם את Agentic OS ו־Builder OS: מערכות עבודה שמחברות בין מחקר, קבלת החלטות, בנייה, בדיקה ושיפור מתמשך.</p>
            <p>במקביל תכננתי, בניתי והבאתי ל־App Store שתי אפליקציות iOS מבוססות AI. העבודה עליהן כללה מעבר מלא מרעיון וצורך משתמש, דרך החלטות מוצר וחוויית שימוש, ועד פיתוח, השקה ושיפור.</p>
            <div className="three-worlds">
              <span>הבנה עסקית וניהולית.</span>
              <span>ייעוץ וניהול סיכונים.</span>
              <span>בניית מערכות, סוכנים ואוטומציות.</span>
              <span>פיתוח מוצרי iOS מבוססי AI.</span>
            </div>
            <p>החיבור הזה מאפשר לי ללוות אתכם מעבר למצגת או להמלצה: להבין את הצורך, לבחון חלופות, לבחור כיוון, לבנות את הפתרון ולדאוג שהוא ישתלב בעבודה היומיומית.</p>
            <p><strong>אתם לא צריכים לעקוב אחרי כל מודל וכל כלי חדש. אתם צריכים שותף שמבין את העסק ויודע לגרום ל־AI לעבוד בשבילו.</strong></p>
          </div>
        </div>

        <div className="section-shell portfolio-heading" id="products">
          <p className="section-label section-label-light">מוצרים לדוגמה</p>
          <h2>שתי אפליקציות מבוססות AI<br />בעולמות תוכן שונים.</h2>
          <p>RunSmart ו־Resumely הן לא הדגמות או רעיונות על הנייר. אלו אפליקציות iOS שתכננתי, בניתי והשקתי ב־App Store — כדוגמה ליכולת לקחת בעיה, להפוך אותה למוצר AI שלם ולהביא אותו לידיים של משתמשים אמיתיים.</p>
        </div>
        <div className="section-shell product-proof" aria-label="מוצרים לדוגמה — אפליקציות AI שבנה נדב">
          <article>
            <div className="product-logo product-logo-runsmart">
              <img src="/runsmart-logo.png" alt="לוגו RunSmart" width="900" height="272" />
            </div>
            <span>AI RUN COACHING · LIVE ON THE APP STORE</span>
            <h3>RunSmart</h3>
            <p>אפליקציית iOS לאימון ריצה אישי מבוסס AI, שמתרגמת נתוני משתמש ותהליך אימון לחוויית מוצר ברורה ומעשית.</p>
            <ul className="portfolio-skills" aria-label="יכולות שהודגמו ב־RunSmart">
              <li>אסטרטגיית מוצר</li>
              <li>תהליכי AI</li>
              <li>פיתוח iOS</li>
              <li>השקה ושיפור</li>
            </ul>
            <div className="proof-links">
              <a className="app-store-link" href="https://apps.apple.com/il/app/runsmart-ai-run-coaching/id6768297840" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
              <a href="https://www.facebook.com/profile.php?id=61593058382655" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/140013922/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
          <article>
            <div className="product-logo product-logo-resumely">
              <img src="/resumely-logo.png" alt="לוגו Resumely" width="920" height="200" />
            </div>
            <span>AI RESUME BUILDER · LIVE ON THE APP STORE</span>
            <h3>Resumely</h3>
            <p>אפליקציית iOS לבנייה ולשיפור של קורות חיים בעזרת AI, עם תהליך מובנה שהופך מידע גולמי למסמך מקצועי ושימושי.</p>
            <ul className="portfolio-skills" aria-label="יכולות שהודגמו ב־Resumely">
              <li>אפיון חוויית משתמש</li>
              <li>תהליכי AI</li>
              <li>פיתוח iOS</li>
              <li>השקה ושיפור</li>
            </ul>
            <div className="proof-links">
              <a className="app-store-link" href="https://apps.apple.com/il/app/resume-ai-cv-builder/id6776752349" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
              <a href="https://www.facebook.com/profile.php?id=61593060242562" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/137603901/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </article>
        </div>
        <p className="section-shell portfolio-close">עבור העסק שלכם, אותה יכולת מתורגמת לפתרון המתאים לכם: תהליך חכם יותר, סוכן AI, מערכת פנימית או מוצר דיגיטלי שלם.</p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-label section-label-light">שיחת היכרות ומיפוי</p>
            <h2 id="contact-title">בואו נמצא את המקום הראשון שבו AI יכול לעבוד טוב יותר בשביל העסק.</h2>
            <div className="copy-stack">
              <p><strong>לא צריך להתחיל בפרויקט גדול. מתחילים בשיחה ממוקדת ובבעיה אמיתית.</strong></p>
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
