import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Bryan Rollorata — Portfolio",
  description:
    "Aaron Bryan Rollorata — Computer Engineering student, embedded systems developer, and full stack developer. Building web apps, IoT, and AI-powered projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-white antialiased grain">{children}</body>
    </html>
  );
}
