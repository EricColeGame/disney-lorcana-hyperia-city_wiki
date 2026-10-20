import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This independent fan wiki provides informational guides and reference material for the Disney Lorcana Hyperia City expansion. We do not request Disney accounts, Ravensburger account credentials, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to the official Disney Lorcana website, the official card database, Discord, YouTube, X, Reddit, or other community resources. Those services are governed by their own privacy policies.</p>
      <p>Privacy questions may be sent to <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
