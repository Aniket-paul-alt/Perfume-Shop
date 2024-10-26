import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import components for routing
import Home from './pages/Home/Home'; // Import Home page component
import ProductPage from './pages/ProductPage/ProductPage'; // Import ProductPage component
import About from './pages/About/About'; // Import About page component
import Contact from './pages/Contact/Contact'; // Import Contact page component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

function App() {
  return (
    <Router> {/* Wrap the application with Router for enabling routing */}
      <Routes> {/* Define the routes for the application */}
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/products/:id" element={<ProductPage />} /> {/* Route for ProductPage with dynamic product ID */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
      </Routes>
    </Router>
  );
}

export default App; // Export the App component as the default export
