import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BoardList from "./pages/BoardList";

//Home singup mypage
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/boardlist" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
