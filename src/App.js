import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Talkabout from "./Talkabout";
import Home from "./Home";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        {/* 여기다가 랜딩페이지 넣을거임 */}
        <Route path="/" element={<Home></Home>} />
        {/* 대화페이지*/}
        <Route path="/talkabout" element={<Talkabout></Talkabout>}></Route>
        {/* 여기다가 대화내용 db 아이디 넣을거임 */}
        {/* <Route path="/about/:id" element={<About></About>}>
          <Route path="1" element={<div>1</div>} />
          <Route path="2" element={<div>2</div>} />
        </Route>

        <Route path="/cart" element={<Cart></Cart>} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* 대화페이지/대화목록/뒤로가기.. 등등의 버튼 */}

      <button
        onClick={() => {
          navigate("/talkabout");
        }}
      >
        대화페이지로 이동하는 임시버튼
      </button>
    </div>
  );
}

export default App;
