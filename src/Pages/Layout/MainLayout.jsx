import { Navbar } from "flowbite-react";
import React from "react";
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const MainLayout = () => {
  const { user } = useAuth();
  const location = useLocation();
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const outlet = useOutlet();

  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Todo List App
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={location.pathname === "/" ? true : false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            active={location.pathname === "/about" ? true : false}
          >
            About
          </Navbar.Link>
          <Navbar.Link
            href="/login"
            active={location.pathname === "/login" ? true : false}
          >
            Login
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="p-4">{outlet}</main>
    </div>
  );
};

export default MainLayout;
