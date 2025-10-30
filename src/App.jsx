import { Route, Routes } from "react-router-dom";
import { CompaniesTable } from "./components/CompaniesTable";
import { FilterControls } from "./components/FilterControls";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import About from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <main className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="shrink-0">
        <Header />
      </header>


      <Routes>
        <Route path="/" element={
          <div className="flex-1 flex flex-col overflow-hidden">
            <section className="px-3 md:px-4 pt-2 bg-zinc-700">
              <FilterControls />
            </section>

            <section className="flex-1 overflow-hidden px-3 md:px-4 py-2 bg-zinc-700">
              <CompaniesTable />
            </section>
          </div>
        } />
        <Route path="/about" element={
          <div className="flex-1 overflow-auto px-3 md:px-4 py-2 bg-zinc-700">
            <About />
          </div>
        } />

        <Route path="/contact" element={
          <div className="flex-1 overflow-auto px-3 md:px-4 py-2 bg-zinc-700">
           <Contact/>
          </div>
        } />
      </Routes>

      {/* Fixed Footer */}
      <footer className="shrink-0">
        <Footer />
      </footer>
    </main>
  );
}

export default App;