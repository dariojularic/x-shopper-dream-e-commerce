import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
