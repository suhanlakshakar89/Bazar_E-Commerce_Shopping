

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Profile from "./pages/Profile"; 
import Menu from "./pages/Menu";
import History from "./pages/History"; 
import First_work from "./pages/First_work";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/History" element={<History />} />
            <Route path="/First" element={<First_work />} />
            <Route path="/" element={<Profile />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}