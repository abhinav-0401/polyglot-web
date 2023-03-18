import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import authBeforeRender from "../helpers/authBeforeRender";

function Home() {
  const navigate = useNavigate();

  console.log(document.cookie);
  useEffect(() => {
    const status = authBeforeRender();

    if (status === 1) {
      navigate("/register");
    }
  }, []);

  function handleLogout() {

    document.cookie = "tx_id=idk; max-age=0";
    console.log(document.cookie.split(";"));
    navigate("/login");
  }

  return (
    <div>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );  
}

export default Home;