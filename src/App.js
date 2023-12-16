import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 여기다가 랜딩페이지 넣을거임 */}
        <Route path="/" element={<Card shoes={shoes}></Card>} />
        {/* list/id에다가 유저아이디 넣을거임 */}
        <Route
          path="/talkabout/lists/:id"
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
        {/* 여기다가 대화내용 db 아이디 넣을거임 */}
        <Route path="/about/:id" element={<About></About>}>
          <Route path="1" element={<div>1</div>} />
          <Route path="2" element={<div>2</div>} />
        </Route>

        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* 대화페이지/대화목록/뒤로가기.. 등등의 버튼 */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/detail/0");
        }}
      >
        Detail
      </button>
    </div>
  );
}

export default App;
