import type { Metadata } from "next";
import { LeadForm } from "../LeadForm";

const title = "NY AI Solutions | פתרון עובד למשימה שחוזרת בעסק";
const description = "בתוך 7–10 ימי עסקים: פתרון AI אחד שעובד בעסק שלכם, הדרכה לשימוש ותוכנית המשך. מתחילים בשיחת התאמה ללא עלות.";
const origin = "https://ny-ai-consulting.nadav-yigal.chatgpt.site";
const whatsapp = "https://wa.me/972545333773?text=" + encodeURIComponent("שלום נדב, קראתי את דף היתרונות ואשמח לבדוק איך אפשר לשפר משימה שחוזרת בעסק שלי.");

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, type: "website", locale: "he_IL", url: origin + "/benefits", siteName: "NY AI Solutions", images: [{ url: origin + "/og.png", width: 1659, height: 948, alt: "NY AI Solutions" }] },
  twitter: { card: "summary_large_image", title, description, images: [origin + "/og.png"] },
};

const deliverables = [
  { title: "פתרון שעושה חלק מהעבודה", body: "כלי שמוגדר למשימה שבחרנו יחד — למשל הכנת סיכומים או טיוטות ללקוחות — ופועל בסביבת העבודה שלכם." },
  { title: "היכולת להשתמש בו בעצמכם", body: "הדרכה והוראות ברורות: מה מכניסים, מה מקבלים ומה בודקים לפני שמשתמשים בתוצאה." },
  { title: "תוכנית ברורה להמשך", body: "מפת הזדמנויות ותוכנית ל־90 יום: מה כדאי לשפר אחר כך, מה להשאיר כפי שהוא ואיך למדוד את השינוי." },
];

export default function BenefitsPage() {
  return (
    <main className="benefits-v2">
      <header className="bv-header">
        <a className="header-wordmark" href="/" aria-label="NY AI Solutions — האתר המלא"><strong>NY</strong><span>AI SOLUTIONS</span></a>
        <a href="/" className="bv-more">עוד על השירות ←</a>
      </header>
      <section className="bv-intro" aria-labelledby="benefits-title">
        <p className="bv-label">שירות מעשי להטמעת AI בעסק</p>
        <h1 id="benefits-title">פחות עבודה ידנית.<br /><span>יותר זמן ללקוחות שלכם.</span></h1>
        <p className="bv-lead">בתוך 7–10 ימי עסקים תקבלו פתרון אחד למשימה שחוזרת בעסק — מוכן לשימוש, עם הדרכה ותוכנית המשך.</p>
        <p className="bv-clarify">זהו ליווי אישי לבנייה ולהטמעה בעסק שלכם, ולא קורס. מתחילים מהכלים שכבר יש לכם.</p>
        <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">נבדוק מה אפשר לשפר בעסק שלי</a>
        <p className="bv-caption">שיחת התאמה ללא עלות · 30–45 דקות</p>
      </section>
      <section className="bv-deliverables" aria-labelledby="takeaway-title">
        <h2 id="takeaway-title">מה נשאר אצלכם בסוף?</h2>
        <div className="bv-grid">
          {deliverables.map((item, i) => <article key={item.title}><span className="bv-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
        </div>
      </section>
      <section className="bv-example" aria-labelledby="example-title">
        <p className="bv-label">דוגמה אפשרית — הפתרון ייבחר לפי העסק שלכם</p>
        <h2 id="example-title">סיימתם שיחה עם לקוח. מה עכשיו?</h2>
        <div className="bv-comparison">
          <div><h3>היום</h3><p>מנסחים סיכום, מכינים רשימת משימות וכותבים הודעת המשך — בכל פעם מחדש.</p></div>
          <div><h3>עם הפתרון</h3><p>מזינים נקודות מהשיחה בלי פרטים מזהים, ומקבלים סיכום, משימות וטיוטת הודעה. אתם בודקים, מוסיפים את פרטי הלקוח אצלכם ושולחים.</p></div>
        </div>
        <p className="bv-example-note">פחות ניסוח חוזר, עם אישור שלכם לפני השליחה. את החיסכון בודקים מול אופן העבודה הקודם.</p>
      </section>
      <section className="bv-contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">איזו משימה הייתם שמחים להוריד מהעומס?</h2>
        <p>בשיחה נבחר משימה ששווה לבדוק. אם יש התאמה, תקבלו הצעה עם היקף, מחיר ותוצאה מוגדרים מראש.</p>
        <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">נדבר על המשימה שלכם ב־WhatsApp</a>
        <p className="bv-caption">נדב יגאל · NY AI Solutions · <a href="mailto:nadav.yigal@gmail.com">שלחו לי מייל</a></p>
        <details className="bv-form"><summary>מעדיפים לפרט לפני השיחה?</summary><LeadForm sourceLine="שלום נדב, הגעתי דרך גרסת היתרונות באתר NY AI Solutions." /></details>
      </section>
      <footer className="bv-footer"><span>© {new Date().getFullYear()} NY AI Solutions</span><a href="/">עוד על השירות ועל נדב ←</a></footer>
    </main>
  );
}
