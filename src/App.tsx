import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Hero } from "@/components/sections/Hero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { Portfolio } from "@/components/sections/Portfolio";
import { Executives } from "@/components/sections/Executives";
import { Analysis } from "@/components/sections/Analysis";
import { Results } from "@/components/sections/Results";
import { MarketSentiment } from "@/components/sections/MarketSentiment";
import { SnakeGame } from "@/components/sections/SnakeGame/SnakeGame";
import { Reports } from "@/components/sections/Reports";
import FAQ from "@/components/sections/FAQ";
import DemoPage from "@/components/sections/DemoPage";

import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1">
                  <Hero />
                  <CompanyOverview />
                  <Executives />
                  <Portfolio />
                  <SnakeGame />
                  <MarketSentiment />
                  <Analysis />
                  <Results />
                  <FAQ />
                  <Reports />
                </main>

                <Footer />
              </div>
            }
          />
          <Route
            path="/demo"
            element={
              <div className="min-h-screen flex flex-col">
                <Header demoPage />
                <main className="flex-1 pt-16">
                  <DemoPage />
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
