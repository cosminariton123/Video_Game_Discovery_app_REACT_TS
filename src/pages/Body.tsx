import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet></Outlet>
    </>
  );
};

export default Body;
