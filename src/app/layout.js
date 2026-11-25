import { yekan } from "@/utils/font";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "Real Estate | خرید و اجاره ملک",
  description: "سامانه خرید، فروش و اجاره انواع ملک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={yekan.className}>
      <body>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
