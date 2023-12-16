import { useState } from "react";
import axios from "axios";

export default function Home() {
  let [nickname, setNickname] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/nickname", nickname);
      console.log("Server Response", response.data);

      if (response.status === 200) {
        window.location.href = `/talkabout/${nickname}`;
      }
    } catch (error) {
      console.error("Error sending POST request: ", error);
    }
    window.location.href = `/talkabout`;
  };

  return (
    <div>
      <p>초기화면이 될 시작페이지입니다.</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Your NickName?"
        ></input>
        <button type="submit">Submit</button>
      </form>

      {/* <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      /> */}
    </div>
  );
}
