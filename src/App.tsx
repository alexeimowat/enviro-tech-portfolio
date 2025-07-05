import { Header } from "./Header";
import { Footer } from "./Footer";
import "./index.css";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
      </main>
      <Footer />
    </div>
  );
}

export default App;
