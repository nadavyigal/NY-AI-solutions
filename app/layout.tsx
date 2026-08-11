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
  const title = "NY AI Solutions | גורמים ל־AI לעבוד בשביל העסק שלכם";
  const description =
    "פתרונות AI לעסקים בישראל — ממיפוי ואוטומציה ועד סוכני AI, מערכות ופיתוח אפליקציות iOS. מבינים את העסק, בונים ומטמיעים פתרון שעובד.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "פתרונות AI לעסקים",
      "הטמעת AI",
      "אוטומציה עסקית",
      "פיתוח אפליקציות iOS AI",
      "AI לעסקים בישראל",
      "NY AI Solutions",
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
      siteName: "NY AI Solutions",
      title,
      description,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1659,
          height: 948,
          alt: "NY AI Solutions — AI שעובד בשביל העסק שלכם",
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
