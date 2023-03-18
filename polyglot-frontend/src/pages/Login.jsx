import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authBeforeRender from "../helpers/authBeforeRender";

function Login() {
  const [txId, setTxId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const status = authBeforeRender();

    if (status === 0) {
      navigate("/");
    }
  }, []);


  function handleLoginResponse(status) {
    switch (status.status) {
      case "ok":
        console.log(status.user);
        navigate("/");
        break;
      case "Invalid technex id":
        alert("Wrong technex id!");
      default:
        alert("idk");
    }
  }

  async function handleLogin() {
    console.log("register button clicked; tx_id: ", txId);

    const status = await fetch("http://localhost:1234/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tx_id: txId,
      })
    });
    status.json()
      .then(result => {
        handleLoginResponse(result);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <input type="text" placeholder="Technex ID"  value={txId} onChange={(event) => setTxId(event.target.value)} />
      <button onClick={handleLogin}> Log In </button>
    </>
  );
}

export default Login;