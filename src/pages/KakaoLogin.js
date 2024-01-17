import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function KakaoLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIREDCT_URI;
  const grant_type = "authorization_code";
  const PARAMS = new URL(document.location.toString()).searchParams;
  const KAKAO_CODE = PARAMS.get("code"); //인가코드

  //access token 받아오기
  const getAccessToken = async () => {
    console.log("getAccessToken 호출");
    try {
      //백엔드로 인가코드 넘기고 정보 받아옴
      const response = await axios
        .post("http://localhost:3001/user", {
          authorizationCode: KAKAO_CODE,
          grant_type: grant_type,
          client_id: client_id,
          redirect_uri: redirect_uri,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [KAKAO_CODE]);

  return <div>{user}hi</div>;
}
