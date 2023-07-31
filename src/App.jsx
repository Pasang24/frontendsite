import Header from "./components/custom components/Header.jsx";
import Footer from "./components/custom components/Footer.jsx";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Register from "./pages/Register.jsx";
import PostJobPage from "./pages/PostJobPage.jsx";
import ShowJob from "./pages/jobs/ShowJob.jsx";
import PostedJobs from "./pages/jobs/PostedJobs.jsx";
import AppliedJobs from "./pages/jobs/AppliedJobs.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="jobs/:id" element={<ShowJob />} />
        <Route path="/postedjobs" element={<PostedJobs />} />
        <Route path="/appliedjobs" element={<AppliedJobs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
