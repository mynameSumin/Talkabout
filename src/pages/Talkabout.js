import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Talkabout() {
  let navigate = useNavigate();
  let conversation = useSelector((state) => {
    return state.conversation;
  });

  useEffect(() => {
    console.log(localStorage.getItem("user"));
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      {conversation.map((a, i) => {
        return (
          <div key={i}>
            <h4>{a.role}</h4>
            <p>{a.content}</p>
          </div>
        );
      })}
    </div>
  );
}
