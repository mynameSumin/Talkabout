import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Talkabout from "./pages/Talkabout";
import Home from "./pages/Home";
import KakaoLogin from "./pages/KakaoLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 랜딩페이지 */}
        <Route path="/" element={<Home></Home>} />
        {/*로그인 페이지*/}
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        {/* 대화페이지 */}
        <Route path="/talkabout" element={<Talkabout />} />
        {/* 여기다가 대화내용 db 아이디 넣을거임 */}
        {/* <Route path="/about/:id" element={<About></About>}>
          <Route path="1" element={<div>1</div>} />
          <Route path="2" element={<div>2</div>} />
        </Route>

        <Route path="/cart" element={<Cart></Cart>} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* 대화페이지/대화목록/뒤로가기.. 등등의 버튼 */}
    </div>
  );
}

export default App;
