import type { Metadata } from "next";
import BenefitsLandingPage from "../BenefitsLandingPage";

export const metadata: Metadata = {
  title: "NY AI Solutions | היתרונות לעסק",
  description:
    "מפתרון נקודתי וחכם ועד מערכת AI שלמה — בהתאם למה שהעסק באמת צריך.",
};

export default function BenefitsPage() {
  return <BenefitsLandingPage />;
}
