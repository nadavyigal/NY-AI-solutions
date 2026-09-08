import { LeadForm } from "./LeadForm";

const outcomes = [
  {
    title: "פתרונות AI שמותאמים לעסק עצמו",
    body: "לא עוד כלי גנרי שלא באמת משתמשים בו.",
  },
  {
    title: "ייעול תהליכי עבודה",
    body: "פחות שלבים מיותרים ועבודה ידנית.",
  },
  {
    title: "חיסכון משמעותי בזמן",
    body: "אוטומציה של משימות שחוזרות על עצמן.",
  },
  {
    title: "הגדלת תפוקת העובדים",
    body: "יותר עבודה משמעותית בפחות זמן.",
  },
  {
    title: "שיפור איכות ודיוק העבודה",
    body: "פחות טעויות ויותר אחידות.",
  },
  {
    title: "חיסכון בעלויות",
    body: "שימוש חכם יותר בזמן ובמשאבים הקיימים.",
  },
  {
    title: "שיפור השירות וחוויית הלקוח",
    body: "תגובות מהירות ומדויקות יותר.",
  },
  {
    title: "קבלת החלטות טובה ומהירה יותר",
    body: "מידע נגיש ומסודר יותר.",
  },
  {
    title: "הטמעה אמיתית בקרב העובדים",
    body: "כך שהמערכות הופכות לחלק משגרת העבודה.",
  },
  {
    title: "עסק יעיל, מתקדם ותחרותי יותר",
    body: "בלי שהמנהלים והעובדים צריכים להפוך למומחי AI.",
  },
];

export default function Page() {
  return <Home />;
}
function Home() {
  return (
    <main>
      <header className="site-header" aria-label="ניווט ראשי">
        <a className="header-wordmark" href="#top" aria-label="NY AI Solutions — לראש העמוד">
          <strong>NY</strong>
          <span>AI SOLUTIONS</span>
        </a>
        <nav className="header-nav" aria-label="קישורי עמוד">
          <a href="#outcomes">מה תצאו מזה</a>
          <a href="#approach">הגישה</a>
          <a href="#about">אודות</a>
          <a href="#products">מוצרים לדוגמה</a>
          <a href="/benefits">למה זה כדאי</a>
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
            <p className="hero-opening-emphasis">אתם לא צריכים להפוך למומחי AI כדי שזה יקרה.</p>
            <p>כולם מדברים היום על AI.</p>
            <p>כל שבוע יוצא עוד כלי, עוד מערכת, עוד אפשרות חדשה ש”אתם חייבים להכיר”.</p>
            <p>אבל כבעלי עסק, אתם לא באמת צריכים להכיר הכול.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">בואו נדבר</a>
            <a className="text-link" href="#outcomes">עם מה תצאו מהתהליך? ←</a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="value-flow" aria-label="איך זה עובד — בגדול">
            <p className="value-flow-label">איך זה עובד — בגדול</p>
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

      <section className="outcomes-section section-shell" id="outcomes" aria-labelledby="outcomes-title">
        <div className="section-heading compact-heading">
          <h2 id="outcomes-title">עם מה תצאו מהתהליך:</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-section" id="offer" aria-labelledby="offer-title">
        <div className="section-shell offer-layout">
          <div className="fit-call-panel">
            <p className="section-label">הצעד הראשון — ללא עלות</p>
            <h2 id="offer-title">שיחת התאמה של 30–45 דקות.</h2>
            <p>נזהה תהליך אחד ששווה למפות — או שנגיד בכנות שאין כרגע התאמה. בסוף השיחה תהיה לכם תמונה ברורה יותר של האפשרויות ושל הצעד הבא שנכון לעסק.</p>
          </div>
          <div className="offer-form">
            <div>
              <p className="section-label section-label-light">מתחילים בשיחת התאמה</p>
              <h2>ספרו לי איך אתם עובדים היום ולאן הייתם רוצים להגיע.</h2>
              <p>הטופס פותח הודעת WhatsApp אצלכם. שום פרט לא נשמר באתר.</p>
            </div>
            <LeadForm sourceLine="שלום נדב, אני רוצה לבדוק התאמה לתהליך AI בעסק שלי." />
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-shell about-layout">
          <div className="section-heading section-heading-light">
            <h2 id="about-title">נדב יגאל</h2>
          </div>
          <div className="copy-stack about-copy">
            <p><strong>אני עוזר לעסקים להפוך את האפשרויות של AI לפתרונות מעשיים שאנשים באמת יכולים לעבוד איתם.</strong></p>
            <p>אני בעל תואר ראשון בכלכלה וניהול עסקים, עם ניסיון מקצועי בייעוץ לניהול סיכונים ושיפור תהליכים, פיתוח עסקי, ובנקאות גלובאלית. לאורך השנים עסקתי בתפר שבין מערכות מידע, מערכות פיננסיות והעבודה העסקית. הרקע הזה לימד אותי להסתכל על טכנולוגיה דרך שאלות עסקיות: מה הבעיה שאנחנו פותרים, מה הערך הצפוי, מה הסיכון, ואיך נדע שהפתרון באמת עובד.</p>
            <p>אני עובד עם AI באופן מעמיק ומעשי — מחקר ובחירת כלים, תכנון תהליכי עבודה, בניית סוכנים ואוטומציות, בדיקות איכות וסיכון, ופיתוח מערכות ומוצרים.</p>
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

        <div className="section-shell engagement-proof" aria-labelledby="engagement-proof-title">
          <p className="section-label section-label-light">דוגמה אנונימית מהשטח</p>
          <h2 id="engagement-proof-title">כך הצ׳אט מקצר את הדרך מהפגישות שהתקיימו להפקת החשבוניות.</h2>
          <div>
            <p>בעלת עסק לשירותים מקצועיים מנהלת פגישות חוזרות עם לקוחות. במקום לעבור בכל פעם על הרשימות ידנית, היא כותבת לצ׳אט אילו פגישות התקיימו.</p>
            <p>העוזר מסדר את המידע בטבלה ומכין לכל לקוח טיוטה מסודרת. בעלת העסק בודקת את התוצאה, משלימה את פרטי הלקוח מחוץ לצ׳אט וממשיכה להפקת החשבונית במערכת שבה היא כבר משתמשת.</p>
            <p>לא הוחלפה מערכת החשבוניות ולא נשלח דבר אוטומטית. המידע שמזהה את הלקוחות נשאר מחוץ למודל, והשליטה נשארת אצל בעלת העסק.</p>
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
        <p className="section-shell portfolio-close">פיתוח מוצרי iOS מופיע כאן כהוכחה ליכולת לבנות ולהשיק תוכנה שעובדת — לא כשירות נוסף בתפריט.</p>
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
