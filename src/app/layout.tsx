import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Response Assistant",
  description: "Governed Conversational AI & Response Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
