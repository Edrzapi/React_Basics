import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

// const Home = () => {
//   return(
//     <div>
//       <h1>Welcome to the home page!</h1>
//       <p>Some stuff...</p>
//       <Link to ="/about">Go to about page!</Link>
//     </div>
//   );
// };

// export default Home;

