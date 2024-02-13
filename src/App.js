import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePage from "./pages/CreatePage";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import UpdatePage from "./pages/UpdatePage";

//Home singup mypage
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/boardlist/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
