import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering the Disney Lorcana Hyperia City expansion, including card previews, Ink Drops mechanics, deck-building, release details, and collecting tips.</p>
      <p>Hyperia City is a Disney Lorcana trading card game expansion set in a magical modern city. This wiki is not an official game, publisher, or community platform.</p>
      <p>Questions or corrections may be sent to <a className="font-semibold text-foreground underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
