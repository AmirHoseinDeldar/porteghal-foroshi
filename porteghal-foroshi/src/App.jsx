import "./App.css";
import AppBanner from "./components/AppBanner/AppBanner";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
    </main>
  );
}

export default App;
