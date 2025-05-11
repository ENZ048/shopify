import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import ContactPage from "./pages/Contact/ContactPage";
import UsersPage from "./pages/Users/UsersPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        pauseOnHover
      />

      <Navbar />

      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoutes>
              <ProductsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <UsersPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <ContactPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
