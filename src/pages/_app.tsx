import ThemeProvider from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <div
        id="root"
        className={cn("min-h-screen flex flex-col", fontSans.className)}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
