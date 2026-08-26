import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Booth Superpower | Compound",
  description: "Turn your booth visitors into your superpower."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
