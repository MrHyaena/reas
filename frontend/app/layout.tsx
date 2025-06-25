import "./globals.css";
import Header from "./_components/Header/_components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reas: Nemovitosti digitálně",
  description:
    "S námi dostanete prostor pro správu vašeho prodeje, zdarma nemovitost oceníme a v případě zájmu domluvíme konzultaci s realitním specialistou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
