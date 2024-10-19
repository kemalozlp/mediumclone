 import Header from "@/components/header/page";
import "./globals.css";


export const metadata = {
  title: "Medium Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
