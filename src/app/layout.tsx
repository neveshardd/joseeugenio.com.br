import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/QueryProvider";
import PageAnimate from "@/components/PageAnimate";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { defaultMetadata, viewport } from "@/lib/metadata";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = defaultMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(workSans.variable, inter.variable, "antialiased")}>
        <QueryProvider>
          <PageAnimate>
            <div className="flex flex-col min-h-screen bg-background">
              <SiteHeader />
              
              <div className="flex-1 w-full">
                {children}
              </div>

              <SiteFooter />
            </div>
          </PageAnimate>
        </QueryProvider>
      </body>
    </html>
  );
}
