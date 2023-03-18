import authBeforeRender from "../helpers/authBeforeRender";

function Account() {
  useEffect(() => {
    authBeforeRender();
  }, [])

  return (
    <>
      This is the home page
    </>
  );
}

export default Account;