import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "./globals.css";
import "@/lib/utils/big-int-solution";

import MainProviders from "./(modules)/(shared)/providers/main-providers/main-providers";
import { cn } from "../lib/utils/cn";
import LoadingRemembermeLoader from "./(modules)/(shared)/(components)/loading-sign-in-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link id="theme-css" href={`/themes/lara-dark-blue/theme.css`} rel="stylesheet"></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </head>
      <body className={cn(inter.className, "bg-surface overflow-hidden")}>
        <MainProviders>
          <LoadingRemembermeLoader />
          {children}
        </MainProviders>
      </body>
    </html>
  );
}