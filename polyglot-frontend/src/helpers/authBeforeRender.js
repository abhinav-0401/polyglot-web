// import { useNavigate } from "react-router-dom";

function authBeforeRender() {
  // const navigate = useNavigate();

  console.log("authCookie: ", document.cookie.split(";"));
  const txId = document.cookie
    .split(";")
    .find(cookie => (cookie.slice(0, 5) === "tx_id"));

  if (!txId) {
    return 1;
  }
  return 0;
}

export default authBeforeRender;