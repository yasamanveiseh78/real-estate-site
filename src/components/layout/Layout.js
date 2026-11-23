import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

function Layout({ children}) {
  const style = { minHeight: "700px" };
  return (
    <main>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
