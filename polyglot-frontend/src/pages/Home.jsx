import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import authBeforeRender from "../helpers/authBeforeRender";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const status = authBeforeRender();

    if (status === 1) {
      navigate("/register");
    }
  }, []);

  

  return (
    <div>
      
    </div>
  );  
}

export default Home;