import { useEffect } from "react";

function Home() {
  useEffect(() => {

    fetch("http://localhost:1234/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  }, []);

  return (
    <>
      This is the Home page
    </>
  );
}

export default Home;