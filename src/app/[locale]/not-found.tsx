import Link from "next/link";
import { getLocale, getMessages } from "next-intl/server";
import { Button } from "@/components/ui/button";
import en from "@/locales/en.json";

type Messages = typeof en;

export default async function NotFoundPage() {
  const locale = await getLocale();
  const messages = (await getMessages({ locale })) as Messages;
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{messages.shared.notFoundTitle}</h1>
        <p className="mt-4 text-muted-foreground">{messages.shared.notFoundDescription}</p>
        <Button asChild className="mt-6"><Link href={`/${locale}/guide`}>{messages.shared.notFoundCta}</Link></Button>
      </div>
    </main>
  );
}
