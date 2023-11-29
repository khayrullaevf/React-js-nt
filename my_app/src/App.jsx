import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import TeamPage from "./pages/TeamPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Blogs from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AccountPage from "./pages/AccountPage";
import TeamMemberPage from "./pages/TeamMemberPage";

function App() {
  const isAuth=false;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/account" /> : <Homepage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
          <Route path="/team/:memberId" element={<TeamMemberPage />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Lesson-4
