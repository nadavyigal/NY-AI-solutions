"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "972545333773";

export type LeadFormData = {
  name: string;
  company: string;
  teamSize: string;
  currentAITools: string;
  workflow: string;
};

function readField(formData: FormData, key: keyof LeadFormData) {
  return String(formData.get(key) ?? "").trim();
}

export function LeadForm({ sourceLine }: { sourceLine?: string } = {}) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lead: LeadFormData = {
      name: readField(formData, "name"),
      company: readField(formData, "company"),
      teamSize: readField(formData, "teamSize"),
      currentAITools: readField(formData, "currentAITools"),
      workflow: readField(formData, "workflow"),
    };

    const message = [
      sourceLine ?? "שלום נדב, הגעתי דרך אתר NY AI Solutions.",
      "",
      `שם: ${lead.name}`,
      `עסק: ${lead.company}`,
      `גודל צוות: ${lead.teamSize || "לא צוין"}`,
      `כלי AI קיימים: ${lead.currentAITools || "לא צוין"}`,
      "",
      "התהליך שהייתי רוצה לשפר:",
      lead.workflow,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setStatus("הודעת WhatsApp מוכנה נפתחת עכשיו. שום פרט לא נשמר באתר.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>שם מלא *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>שם העסק *</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
      </div>

      <label>
        <span>גודל הצוות</span>
        <select name="teamSize" defaultValue="">
          <option value="" disabled>בחרו אפשרות</option>
          <option value="1–9 עובדים">1–9 עובדים</option>
          <option value="10–25 עובדים">10–25 עובדים</option>
          <option value="26–50 עובדים">26–50 עובדים</option>
          <option value="51–100 עובדים">51–100 עובדים</option>
          <option value="מעל 100 עובדים">מעל 100 עובדים</option>
        </select>
      </label>

      <label>
        <span>באילו כלי AI אתם כבר משתמשים?</span>
        <input
          name="currentAITools"
          type="text"
          placeholder="לדוגמה: ChatGPT, Copilot, Gemini"
        />
      </label>

      <label>
        <span>איזה תהליך הייתם רוצים לשפר? *</span>
        <textarea
          name="workflow"
          rows={5}
          placeholder="ספרו בקצרה מה גוזל זמן, חוזר על עצמו או לא עובד מספיק טוב"
          required
        />
      </label>

      <p className="form-privacy">
        הפרטים לא נשמרים באתר. הכפתור רק מכין עבורכם הודעה שתיפתח ב־WhatsApp.
      </p>
      <button className="button button-primary form-submit" type="submit">
        הכינו לי הודעת WhatsApp
      </button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
