import { LeadForm } from "./LeadForm";

const valueAreas = [
  {
    index: "01",
    title: "מסמכים ומידע",
    description:
      "למצוא, לסכם ולעבד מידע מתוך מסמכים קיימים בלי לחפש ידנית בין תיקיות וגרסאות.",
  },
  {
    index: "02",
    title: "דוחות וניתוח",
    description:
      "להפוך נתונים מפוזרים לדוחות, סיכומים ותובנות שאפשר לפעול לפיהן.",
  },
  {
    index: "03",
    title: "שירות ומענה",
    description:
      "לקצר זמני תגובה ולייצר תשובות עקביות — כשהאדם הנכון נשאר בשליטה.",
  },
  {
    index: "04",
    title: "מכירות ושיווק",
    description:
      "להכין הצעות, מעקבים ותוכן שמבוססים על העסק והלקוחות שלכם, לא על תבנית גנרית.",
  },
  {
    index: "05",
    title: "ידע פנימי",
    description:
      "להפוך נהלים, החלטות וניסיון שנמצאים בראש של אנשים לידע נגיש לצוות.",
  },
  {
    index: "06",
    title: "תהליכים חוזרים",
    description:
      "לצמצם העתקות, הקלדות והעברות ידניות בין המערכות שכבר עובדות בעסק.",
  },
];

const journey = [
  {
    number: "01",
    title: "שיחת התאמה קצרה",
    timing: "מתחילים מהצורך",
    description:
      "מבינים את העסק, האנשים, הכלים שכבר נמצאים בשימוש והבעיה שהכי כדאי לפתור קודם.",
  },
  {
    number: "02",
    title: "ספרינט ערך AI",
    timing: "7–10 ימי עבודה",
    description:
      "ממפים 3–5 תהליכים, בוחרים הזדמנות אחת בעלת ערך גבוה, בונים Quick Win עובד ומגדירים תוכנית ל־90 יום.",
  },
  {
    number: "03",
    title: "הטמעה והדרכה",
    timing: "4–8 שבועות לפי הצורך",
    description:
      "בונים את הפתרונות שנבחרו, מחברים אותם לצורת העבודה הקיימת ומדריכים את האנשים שבאמת ישתמשו בהם.",
  },
  {
    number: "04",
    title: "שיפור מתמשך",
    timing: "שותף AI לעסק",
    description:
      "מודדים שימוש ותוצאה, מדייקים את מה שנבנה ומחליטים יחד אם ומתי נכון להתקדם להזדמנות הבאה.",
  },
];

const methods = [
  {
    label: "מיפוי",
    title: "מה קורה היום?",
    description:
      "מפרקים את התהליך לצעדים, אנשים, מערכות וזמן עבודה — לפני שמציעים פתרון.",
  },
  {
    label: "יצירת חלופות",
    title: "מה אפשר לעשות אחרת?",
    description:
      "מפתחים כמה אפשרויות מעשיות, כולל האפשרות להשאיר תהליך שעובד בדיוק כפי שהוא.",
  },
  {
    label: "מחקר רב־זוויתי",
    title: "מה אנחנו מפספסים?",
    description:
      "בודקים את ההזדמנות מזוויות עסקיות, תפעוליות, אנושיות וטכנולוגיות.",
  },
  {
    label: "בדיקת סיכונים",
    title: "מה עלול להשתבש?",
    description:
      "בוחנים פרטיות, טעויות, תלות בכלי ובקרות אנושיות לפני שהפתרון נכנס לעבודה.",
  },
];

const faqs = [
  {
    question: "האם צריך כבר להשתמש ב־AI בעסק?",
    answer:
      "לא. אפשר להתחיל גם מעסק שעוד לא בחר כלי. אם כבר יש מנויים ל־ChatGPT, Copilot או Gemini, נבדוק קודם איך להוציא מהם יותר ערך.",
  },
  {
    question: "האם כל תהליך צריך להפוך לאוטומטי?",
    answer:
      "ממש לא. חלק מהערך הוא לזהות איפה לא כדאי לשנות דבר. אוטומציה נכונה רק כשהיא חוסכת עבודה בלי לפגוע באיכות, באחריות או בקשר עם הלקוח.",
  },
  {
    question: "מה מקבלים בסוף ספרינט הערך?",
    answer:
      "מפת תהליכים ממוקדת, סדר עדיפויות, Quick Win עובד, מדד בסיס להשוואה ותוכנית מעשית ל־90 הימים הבאים.",
  },
  {
    question: "איך מתמחרים את העבודה?",
    answer:
      "לאחר שיחת ההתאמה מוגדרת הצעה לפי מספר התהליכים, המערכות, האנשים והיקף ההטמעה. אין חבילת מדף שמכריחה את העסק לקנות מה שהוא לא צריך.",
  },
  {
    question: "ומה לגבי מידע רגיש?",
    answer:
      "פרטיות ובקרות הן חלק מהאפיון. מגדירים איזה מידע מותר להכניס לכל כלי, מה נשאר מחוץ למערכת ואיפה נדרש אישור אנושי לפני פעולה.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="ניווט ראשי">
        <a className="header-brand" href="#top" aria-label="NY AI Consulting — לראש העמוד">
          <img src="/favicon.png" alt="" width="48" height="48" />
          <span>
            <strong>NY</strong>
            <small>AI CONSULTING</small>
          </span>
        </a>
        <nav className="header-nav" aria-label="קישורי עמוד">
          <a href="#approach">הגישה</a>
          <a href="#process">התהליך</a>
          <a href="#proof">הניסיון</a>
        </nav>
        <a className="header-cta" href="#contact">
          בואו נדבר
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <img
            className="hero-logo"
            src="/logo-on-light.png"
            alt="NY AI Consulting — Making AI work for your business"
            width="650"
            height="430"
          />
          <p className="eyebrow">ייעוץ והטמעת AI לעסקי שירותים מקצועיים בישראל</p>
          <h1>
            AI יכול לעשות הרבה יותר
            <span>בעסק שלכם.</span>
          </h1>
          <p className="hero-lead">
            אתם פשוט לא צריכים להפוך למומחי AI כדי שזה יקרה.
          </p>
          <p className="hero-support">
            לפני שמוסיפים עוד כלי, בודקים איך ה־AI שכבר נמצא בעסק יכול לחסוך זמן,
            לצמצם עבודה ידנית ולשפר תהליכים אמיתיים.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              בואו נמפה איפה AI יכול לעזור
            </a>
            <a className="text-link" href="#process">
              איך זה עובד <span aria-hidden="true">←</span>
            </a>
          </div>
          <ul className="hero-trust" aria-label="עקרונות השירות">
            <li>מתחילים מהעסק</li>
            <li>בונים Quick Win</li>
            <li>מודדים ערך</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="מכלי AI קיימים לתוצאה עסקית מדידה">
          <div className="visual-kicker">AI VALUE FLOW</div>
          <div className="flow-card flow-card-tools">
            <span className="flow-step">01</span>
            <small>מה כבר יש בעסק</small>
            <strong>ChatGPT · Copilot · Gemini</strong>
          </div>
          <div className="flow-connector" aria-hidden="true">
            <span />
          </div>
          <div className="flow-card flow-card-process">
            <span className="flow-step">02</span>
            <small>איפה העבודה נתקעת</small>
            <strong>תהליך עסקי שחוזר על עצמו</strong>
          </div>
          <div className="flow-connector" aria-hidden="true">
            <span />
          </div>
          <div className="flow-card flow-card-result">
            <span className="flow-step">03</span>
            <small>מה משתפר בפועל</small>
            <strong>זמן · איכות · פחות עבודה ידנית</strong>
          </div>
          <div className="visual-footer">
            <span>Business first</span>
            <span>Human controlled</span>
          </div>
        </div>
      </section>

      <section className="problem-band" aria-labelledby="problem-title">
        <div className="section-shell problem-layout">
          <p className="section-label section-label-light">לפני שקונים עוד כלי</p>
          <div>
            <h2 id="problem-title">
              רוב העסקים לא צריכים עוד מנוי.
              <span>הם צריכים להפוך את מה שכבר יש לערך.</span>
            </h2>
            <p>
              מנוי AI שמשמש בעיקר לכתיבת טקסט או לשאלות מזדמנות הוא רק ההתחלה.
              הערך הגדול נמצא בחיבור בין היכולת של הכלי לבין העבודה שחוזרת כל יום
              בעסק.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section section-shell" id="approach">
        <div className="section-heading split-heading">
          <div>
            <p className="section-label">מתחילים מהעסק</p>
            <h2>לא מהטכנולוגיה.</h2>
          </div>
          <div className="heading-copy">
            <p>
              אני לומד איך אתם עובדים היום: אילו משימות גוזלות זמן, איפה נוצר עומס,
              באילו מערכות משתמשים ומה הייתם רוצים שיעבוד טוב יותר.
            </p>
            <p>
              רק אחר כך בוחרים אם צריך שינוי קטן, תהליך חדש, אוטומציה או כלי ייעודי.
              לפעמים ההחלטה הנכונה היא לא לשנות את מה שכבר עובד.
            </p>
          </div>
        </div>

        <div className="principle-statement">
          <span aria-hidden="true">“</span>
          <p>
            המטרה היא לא להכניס AI לעסק.
            <strong>המטרה היא לגרום לעסק לעבוד טוב יותר בעזרת AI.</strong>
          </p>
        </div>
      </section>

      <section className="value-section" aria-labelledby="value-title">
        <div className="section-shell">
          <div className="section-heading compact-heading">
            <p className="section-label">איפה מתחבא הערך</p>
            <h2 id="value-title">שישה מקומות שכדאי לבדוק קודם</h2>
            <p>
              הפתרון משתנה מעסק לעסק. אלה אזורים שבהם עבודה חכמה יותר יכולה להתחיל
              להשפיע במהירות.
            </p>
          </div>
          <div className="value-grid">
            {valueAreas.map((area) => (
              <article className="value-card" key={area.index}>
                <span>{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="process" aria-labelledby="process-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-label">איך זה עובד</p>
            <h2 id="process-title">מהשיחה הראשונה עד לתהליך שעובד</h2>
          </div>
          <p className="heading-copy single-copy">
            מתחילים קטן מספיק כדי לראות תוצאה, וממשיכים רק כשיש סיבה עסקית ברורה.
            התמחור מותאם להיקף לאחר שיחת ההתאמה.
          </p>
        </div>
        <div className="journey-list">
          {journey.map((step) => (
            <article className="journey-item" key={step.number}>
              <span className="journey-number">{step.number}</span>
              <div>
                <small>{step.timing}</small>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sprint-section" aria-labelledby="sprint-title">
        <div className="section-shell sprint-layout">
          <div className="sprint-copy">
            <p className="section-label section-label-light">מוצר הכניסה</p>
            <h2 id="sprint-title">ספרינט ערך AI</h2>
            <p>
              בתוך 7–10 ימי עבודה הופכים את השאלה “איפה AI יכול לעזור?” לתשובה
              מעשית, פתרון ראשון ותוכנית מסודרת להמשך.
            </p>
            <a className="button button-light" href="#contact">
              בדיקת התאמה לספרינט
            </a>
          </div>
          <div className="sprint-deliverables">
            <div><span>01</span><p>מיפוי הכלים, המערכות והתהליכים הקיימים</p></div>
            <div><span>02</span><p>תיעדוף 3–5 הזדמנויות לפי ערך, מאמץ וסיכון</p></div>
            <div><span>03</span><p>Quick Win אחד שעובד בסביבת העסק</p></div>
            <div><span>04</span><p>מדד בסיס ותוכנית פעולה ל־90 יום</p></div>
            <div><span>05</span><p>הדרכה, כללי שימוש ובקרה אנושית</p></div>
          </div>
        </div>
      </section>

      <section className="method-section section-shell" aria-labelledby="method-title">
        <div className="section-heading compact-heading">
          <p className="section-label">שיטת העבודה</p>
          <h2 id="method-title">לראות את ההזדמנות — וגם את הסיכון</h2>
          <p>
            מאחורי התהליך נמצאים כלי המיפוי, החדשנות, המחקר וה־Red Team שפיתחתי
            ואימצתי לאורך בניית המוצרים והמערכות שלי.
          </p>
        </div>
        <div className="method-grid">
          {methods.map((method) => (
            <article key={method.label}>
              <span>{method.label}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" id="proof" aria-labelledby="proof-title">
        <div className="section-shell">
          <div className="proof-intro">
            <div>
              <p className="section-label section-label-light">למה נדב</p>
              <h2 id="proof-title">הבנה עסקית. חשיבה ביקורתית. יכולת לבנות.</h2>
            </div>
            <div>
              <p>
                אני נדב יגאל, בעל תואר ראשון בכלכלה וניהול עסקים, עם ניסיון
                בייעוץ, בנקאות וניהול סיכונים.
              </p>
              <p>
                בשנים האחרונות תכננתי ובניתי שתי אפליקציות AI חיות ומערכת הפעלה
                עסקית שמחברת מחקר, החלטות, ביצוע ובקרת איכות. אני מביא את אותה
                משמעת לפרויקט של הלקוח — בגובה העיניים וללא תלות בז&apos;רגון טכנולוגי.
              </p>
            </div>
          </div>

          <div className="proof-grid">
            <article className="proof-card proof-card-os">
              <div className="proof-tag">OPERATING SYSTEM</div>
              <h3>Builder OS + Agentic OS</h3>
              <p>
                מערכת שמרכזת החלטות, מחקר, משימות, סטטוס ובקרת איכות עבור חברה
                שמנוהלת על ידי אדם אחד עם עוזרי AI.
              </p>
              <div className="os-strip" aria-label="מרכיבי המערכת">
                <span>מחקר</span><span>החלטות</span><span>ביצוע</span><span>בקרה</span>
              </div>
            </article>

            <article className="proof-card">
              <div className="proof-tag">LIVE IOS PRODUCT</div>
              <h3>RunSmart</h3>
              <p>
                אפליקציית מאמן ריצה מבוסס AI עם תוכניות אישיות, מעקב ואינטגרציות
                למקורות נתוני בריאות.
              </p>
              <div className="proof-links">
                <a href="https://apps.apple.com/il/app/runsmart-ai-run-coaching/id6768297840" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
                <a href="https://www.facebook.com/profile.php?id=61593058382655" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/company/140013922/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </article>

            <article className="proof-card">
              <div className="proof-tag">LIVE IOS PRODUCT</div>
              <h3>Resumely</h3>
              <p>
                אפליקציית AI לשיפור קורות חיים והתאמתם למשרה, משלב העלאת המסמך
                ועד ליצוא התוצאה.
              </p>
              <div className="proof-links">
                <a href="https://apps.apple.com/il/app/resume-ai-cv-builder/id6776752349" target="_blank" rel="noopener noreferrer">הורדה ב־App Store</a>
                <a href="https://www.facebook.com/profile.php?id=61593060242562" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/company/137603901/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </article>
          </div>

          <aside className="case-study" aria-labelledby="case-title">
            <div>
              <span>מקרה לקוח אנונימי</span>
              <h3 id="case-title">סביבת AI מותאמת לבעלת עסק</h3>
            </div>
            <p>
              מיפוי העבודה הקיימת ובניית סביבת תוכן וניתוח מותאמת: מסמך קול מותג,
              עוזרי AI למשימות חוזרות, תהליך לדוחות וכללי פרטיות שמגדירים מה נכנס
              למערכת ומה נשאר מחוץ לה.
            </p>
          </aside>
        </div>
      </section>

      <section className="faq-section section-shell" aria-labelledby="faq-title">
        <div className="section-heading split-heading faq-heading">
          <div>
            <p className="section-label">שאלות נפוצות</p>
            <h2 id="faq-title">לפני שמתחילים</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-label section-label-light">אז איפה מתחילים?</p>
            <h2 id="contact-title">ספרו לי מה הייתם רוצים שיעבוד טוב יותר.</h2>
            <p>
              מלאו כמה פרטים. בלחיצה על הכפתור תיפתח אצלכם הודעת WhatsApp מוכנה —
              אתם תעברו עליה ותבחרו אם לשלוח.
            </p>
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
          <img
            src="/logo-on-dark.png"
            alt="NY AI Consulting — Making AI work for your business"
            width="650"
            height="460"
          />
          <div>
            <p>AI שעובד בשביל העסק שלכם.</p>
            <span>© {new Date().getFullYear()} NY AI Consulting · Nadav Yigal</span>
          </div>
          <a href="#top">חזרה למעלה ↑</a>
        </div>
      </footer>
    </main>
  );
}
