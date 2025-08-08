import { Ubuntu, Ubuntu_Condensed } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const ubuntuCondensed = Ubuntu_Condensed({
  variable: "--font-ubuntu-condensed",
  subsets: ["latin"],
  weight: ["400"], // Ubuntu Condensed only supports 400
});

export const metadata = {
  title: "Athena",
  description: "Athena Surgery Center",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${ubuntuCondensed.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
