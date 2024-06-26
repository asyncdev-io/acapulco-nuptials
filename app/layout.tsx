import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acapulco Nuptials",
  description:
    "Acapulco Nuptials sabe que todos los eventos son únicos e irrepetibles, es por ello que para poder ofrecer a sus clientes la máxima calidad, es que esta conformada por un selecto grupo de profesionales en  cada una de las especialidades necesarias para la ejecución de un evento social.",
  authors: [
    { name: "Async Desarrollo Web y Apps", url: "https://asyncdev.io" },
    { name: "Eduardo Urbina", url: "https://eduardourbina.dev" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
