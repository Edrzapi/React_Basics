import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Hardcoded static routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Parameterized route using colon notation */}
        <Route path="/user/:id" element={<UserProfile />} />

        {/* Parameterized route with multiple parameters */}
        <Route path="/product/:category/:id" element={<Product />} />

        {/* Catch-all wildcard route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
