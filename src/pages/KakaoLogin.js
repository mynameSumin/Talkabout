import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function KakaoLogin() {
  const navigate = useNavigate();
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIREDCT_URI;
  const grant_type = "authorization_code";
  const PARAMS = new URL(document.location.toString()).searchParams;
  const KAKAO_CODE = PARAMS.get("code"); //인가코드
  const url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${KAKAO_CODE}`;

  //access token 받아오기
  const getAccessToken = async () => {
    console.log("getAccessToken 호출");
    try {
      const response = await axios
        .post(url, {
          headers: { "Content-type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          const accessToken = res.data.access_token;
          axios
            .get(`https://kapi.kakao.com/v2/user/me`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => {
              navigate("/talkabout");
            });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [KAKAO_CODE]);
  return <div>Loading</div>;
}
