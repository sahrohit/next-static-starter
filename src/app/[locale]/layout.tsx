import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Noto_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { siteConfig } from "@/config/site";
import { locales } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Analytics from "@/components/analytics";
import ModalProvider from "@/components/shared/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";

const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sahrohit",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: `${siteConfig.url.base}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  if (!locales.includes(locale as "en" | "np")) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen bg-background antialiased", noto.className)}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
            <ModalProvider />
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
