import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Disney Lorcana, Hyperia City, Disney character names, card artwork, logos, and related media belong to Disney, Ravensburger, and their respective rights holders.</p>
      <p>This site is a non-official fan wiki created for informational and guide presentation purposes. It is not endorsed by or affiliated with Disney or Ravensburger.</p>
      <p>If you own rights to content displayed here and have a concern, please contact <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
