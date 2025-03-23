import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import PreHomePage from "./Components/PreHomePage";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import NewArticle from "./Components/NewArticle";

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/newArticle" element={<NewArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
