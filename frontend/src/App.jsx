import "@/App.css";
import LandingPage from "@/components/LandingPage";
import { LanguageProvider } from "@/context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LandingPage />
      </div>
    </LanguageProvider>
  );
}

export default App;
