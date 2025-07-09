import { Header } from "./header.component";
import { Footer } from "./footer.component";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 flex flex-col"
      aria-label="Main application layout"
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
