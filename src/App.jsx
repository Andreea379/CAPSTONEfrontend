import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import PreHomePage from "./Components/PreHomePage";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import NewArticle from "./Components/NewArticle";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import ReadArticle from "./Components/ReadArticle";
import Calendar from "./Components/Calendar";

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("log"));
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <Routes>
        <Route path="/" element={<PreHomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Navigate to={"/"} /> : <Home />}
        />
        <Route path="/newArticle" element={<NewArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/findBy" element={<Search />} />
        <Route path="/home/findBy" element={<Search />} />
        <Route path="/profile/findBy" element={<Search />} />
        <Route path="/readArticle/:articleId" element={<ReadArticle />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
