import { Header } from "./header.component";
import { Footer } from "./footer.component";
import { Background } from "./containers/background.component";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Background>{children}</Background>
      <Footer />
    </>
  );
};
