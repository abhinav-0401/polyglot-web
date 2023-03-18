import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authBeforeRender from "../helpers/authBeforeRender";

function Register() {
  const [name, setName] = useState("");
  const [txId, setTxId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const status = authBeforeRender();

    if (status === 0) {
      navigate("/");
    }
  }, []);

  function handleRegistrationResponse(status) {
    switch(status.status) {
      case "ok": {
        navigate("/login");
        console.log("inside case ok");
        break;
      }
      case "err":
        alert("OOPS! Something went wrong while registering!");
        break;
      default:
        alert("idk");
        break;
    }
  }

  async function handleRegistration() {
    console.log("register button clicked; name, tx_id: ", name, ",", txId);

    const status = await fetch("http://localhost:1234/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        tx_id: txId,
      })
    });
    status.json()
      .then(result => {
        console.log(result);
        handleRegistrationResponse(result);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="text" placeholder="Technex ID" value={txId} onChange={(event) => setTxId(event.target.value)} />

      <button onClick={handleRegistration}> Register </button>
    </div>
  );
}

export default Register;