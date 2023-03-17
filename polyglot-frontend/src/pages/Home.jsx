import { useEffect } from "react";

function Home() {

  useEffect(() => {

    console.log("authCookie: ", document.cookie);
    
    fetch("http://localhost:1234/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  }, []);

  return (
    <>
      This is the home page
    </>
  );  
}

export default Home;