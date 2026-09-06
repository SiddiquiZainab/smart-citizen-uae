import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abu Dhabi Executive Overview",
  description:
    "Smart city operations dashboard for Abu Dhabi Government TAMM and municipal services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${notoNaskh.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
