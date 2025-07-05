import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer";
import "./index.css";
import { Content } from "./Components/Content";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
