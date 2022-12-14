import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/to-do-list-mini-app" element={<Home />} />
        <Route path="/" element={<Navigate to="/to-do-list-mini-app" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
