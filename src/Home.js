import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ment from "./ment.png";
import title from "./title.png";
import logo from "./logo.png";

export default function Home() {
  let [nickname, setNickname] = useState("");

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
        <Ment>당신의 이야기를 듣고 싶어요</Ment>
        <form onSubmit={handleFormSubmit}>
          <Name
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Your NickName?"
          ></Name>
          <Button type="submit">Submit</Button>
        </form>

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
  height: 598px;
  margin: auto;
  margin-top: 0;
  background: linear-gradient(rgba(74, 39, 124, 1), rgba(132, 91, 167, 1));
`;

const Hole = styled.div`
  background: black;
`;

const Ment = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: white;
  margin: 0;
`;
const Logo = styled.img`
  width: 260px;
  height: 100px;
  margin-top: 50px;
`;
const Title = styled.img`
  width: 200px;
  height: 120px;
  margin: 0;
`;

const Button = styled.button`
  background: white;
  height: 20px;
  width: 60px;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 4px;
`;

const Name = styled.input`
  margin-top: 30px;
`;
