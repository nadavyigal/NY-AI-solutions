import type { Metadata } from "next";
import { headers } from "next/headers";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "NY AI Consulting | גורמים ל־AI לעבוד בשביל העסק שלכם";
  const description =
    "ייעוץ והטמעת AI לעסקים בישראל. מתחילים מהעסק ומהכלים שכבר קיימים, בונים Quick Win ומודדים ערך אמיתי.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "ייעוץ AI לעסקים",
      "הטמעת AI",
      "אוטומציה עסקית",
      "AI לעסקים בישראל",
      "NY AI Consulting",
    ],
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "he_IL",
      url: origin,
      siteName: "NY AI Consulting",
      title,
      description,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1659,
          height: 948,
          alt: "NY AI Consulting — AI שעובד בשביל העסק שלכם",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.variable}>{children}</body>
    </html>
  );
}
