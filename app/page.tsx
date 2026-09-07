import { LeadForm } from "./LeadForm";

const outcomes = [
  { title: "ייעול תהליכי עבודה", body: "פחות שלבים מיותרים ופחות עבודה ידנית." },
  { title: "חיסכון בזמן ובעלויות", body: "אוטומציה של משימות חוזרות ושימוש חכם יותר במשאבים הקיימים." },
  { title: "הגדלת תפוקת העובדים", body: "פחות זמן על עבודה טכנית ויותר זמן על עבודה משמעותית." },
  { title: "שיפור איכות העבודה והשירות", body: "פחות טעויות, יותר אחידות ועבודה מהירה ומדויקת יותר." },
  { title: "פתרונות שמוטמעים בעסק", body: "לא רק המלצות — אלא פתרונות שמותאמים לעסק ומשתלבים בעבודה בפועל." },
];

const steps = [
  { title: "מבינים את העסק", body: "ממפים את תהליכי העבודה, המשימות והמערכות הקיימות." },
  { title: "מזהים איפה AI יכול לייצר ערך", body: "איפה אפשר לחסוך זמן, להפחית עבודה ידנית, לשפר שירות או להגדיל תפוקה." },
  { title: "בונים ומטמיעים", body: "מתאימים את הפתרון לעסק ודואגים שהוא באמת ישתלב בעבודה היומיומית." },
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
          <a href="#how">איך זה עובד</a>
          <a href="#approach">הגישה</a>
          <a href="#outcomes">מה תצאו מזה</a>
          <a href="#about">אודות</a>
        </nav>
        <a className="header-cta" href="#contact">בואו נדבר</a>
      </header>

      <section className="hero hero-compact" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <h1>
            AI יכול לעשות הרבה יותר
            <span>בעסק שלכם.</span>
          </h1>
          <p className="hero-lead">מפתרון נקודתי וחכם ועד מערכת AI שלמה — בהתאם למה שהעסק באמת צריך.</p>
          <div className="hero-opening">
            <p className="hero-opening-emphasis">אתם לא צריכים להפוך למומחי AI כדי שזה יקרה.</p>
            <p>כבעלי עסק, אתם לא צריכים להכיר כל כלי חדש שיוצא.</p>
            <p>אתם צריכים לדעת איפה AI יכול לחסוך לכם זמן, לייעל תהליכים ולעזור לעסק לעבוד טוב יותר.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">בואו נדבר</a>
            <a className="text-link" href="#outcomes">עם מה תצאו מהתהליך? ←</a>
          </div>
        </div>
      </section>

      <section className="short-how-section" id="how" aria-labelledby="how-title">
        <div className="section-shell">
          <div className="section-heading section-heading-light compact-heading">
            <h2 id="how-title">איך זה עובד?</h2>
          </div>
          <div className="short-process">
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="section-shell approach-layout">
          <div className="section-heading section-heading-light">
            <h2 id="approach-title">קודם מבינים את העבודה.<br />אחר כך בוחרים את הטכנולוגיה.</h2>
          </div>
          <div className="copy-stack approach-copy">
            <p>לפני שמדברים על כלים, אוטומציות או מערכות, אני רוצה להבין:</p>
            <ul className="question-list">
              <li>מה גוזל מכם ומהעובדים שלכם זמן?</li>
              <li>איזו עבודה ידנית חוזרת על עצמה?</li>
              <li>איפה נוצרים עומס או צווארי בקבוק?</li>
              <li>ומה הייתם רוצים שיעבוד טוב יותר?</li>
            </ul>
            <p>רק אז בודקים איפה AI באמת יכול לעזור.</p>
          </div>
        </div>
        <div className="section-shell principle-statement">
          <span aria-hidden="true">“</span>
          <p>המטרה היא לא להכניס AI לעסק.<strong>המטרה היא לגרום לעסק לעבוד טוב יותר בעזרת AI.</strong></p>
        </div>
      </section>

      <section className="outcomes-section section-shell" id="outcomes" aria-labelledby="outcomes-title">
        <div className="section-heading compact-heading">
          <h2 id="outcomes-title">עם מה תצאו מהתהליך?</h2>
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

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-shell about-layout">
          <div className="section-heading section-heading-light">
            <h2 id="about-title">נדב יגאל</h2>
          </div>
          <div className="copy-stack about-copy">
            <p><strong>אני עוזר לעסקים להפוך את האפשרויות של AI לפתרונות מעשיים שעובדים בתוך העסק.</strong></p>
            <p>אני בעל תואר ראשון בכלכלה וניהול עסקים, עם ניסיון בייעוץ לניהול סיכונים ושיפור תהליכים, פיתוח עסקי ובנקאות גלובלית.</p>
            <p>בשנים האחרונות אני עובד באופן מעשי עם AI — מתכנון תהליכי עבודה ובניית אוטומציות וסוכני AI ועד פיתוח מערכות ומוצרים.</p>
            <p>במקביל תכננתי, בניתי והשקתי שתי אפליקציות iOS מבוססות AI, משלב הרעיון ועד למוצר עובד.</p>
            <p>החיבור בין הבנה עסקית ליכולת הטכנולוגית מאפשר לי לזהות מה נכון לעסק — וגם לבנות ולהטמיע את הפתרון בפועל.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="contact-copy">
            <p className="section-label section-label-light">שיחת היכרות ומיפוי</p>
            <h2 id="contact-title">ספרו לי איך אתם עובדים היום ולאן הייתם רוצים להגיע.</h2>
            <div className="copy-stack">
              <p>נבחן יחד איפה AI יכול לייצר את הערך המשמעותי ביותר ומה נכון לעשות עכשיו.</p>
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
