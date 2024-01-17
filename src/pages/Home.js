import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ment from "../assets/ment.png";
import title from "../assets/title.png";
import logo from "../assets/logo.png";
import kakao from "../assets/kakao_login_medium.png";

export default function Home() {
  let [nickname, setNickname] = useState("");
  const restAPIKeys = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirectURI = process.env.REACT_APP_KAKAO_REDIREDCT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${restAPIKeys}&redirect_uri=${redirectURI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/nickname", nickname);
      console.log("Server Response", response.data);

      if (response.status === 200) {
        console.log("nickname 이동");
        window.location.href = `/talkabout/${nickname}`;
      }
    } catch (error) {
      console.error("Error sending POST request: ", error);
    }
    window.location.href = `/talkabout`;
  };

  return (
    <Hole>
      <Main>
        <Logo src={logo} />
        <Title src={title} />
        <Ment src={ment} />
        <form onSubmit={handleFormSubmit}>
          <Name
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="이름을 알려주세요!"
          ></Name>
          <Button type="submit">submit</Button>
        </form>
        <div>
          <Kakao
            src={kakao}
            onClick={() => {
              kakaoLogin();
            }}
          ></Kakao>
        </div>
        {/* <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      /> */}
      </Main>
    </Hole>
  );
}

const Main = styled.div`
  width: 360px;
  height: 100vh;
  margin: auto;
  margin-top: 0;
  background: linear-gradient(rgba(74, 39, 124, 1), rgba(132, 91, 167, 1));
`;

const Hole = styled.div`
  background: black;
`;

const Ment = styled.img`
  width: 230px;
  height: 50px;
  display: block;
  margin: auto;
`;
const Logo = styled.img`
  width: 260px;
  height: 100px;
  margin-top: 50px;
`;
const Title = styled.img`
  width: 200px;
  height: 85px;
  margin: 0;
  margin-top: 10px;
`;

const Kakao = styled.img`
  width: 60px;
  height: 30px;
  margin-top: 15px;
  cursor: pointer;
`;

const Button = styled.button`
  background: white;
  border: none;
  height: 20px;
  width: 200px;
  text-align: center;
  left: 0;
  right: 0;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 5px;
`;

const Name = styled.input`
  margin: auto;
  margin-top: 25px;
  background-color: rgba(74, 39, 124, 1);
  &::placeholder {
    text-align: center;
  }
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 200px;
  display: block;
`;
