import { Navbar } from "flowbite-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../../utils/api";
import { useAuth } from "../../utils/useAuth";

const ProtectedLayout = () => {
  const { user, logout } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  const handleLogout = async () => {
    try {
      const headers = { Authorization: user.token };
      const response = await api.post(
        "/logout",
        { user_id: user.id },
        { headers }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      logout();
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/dashboard">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Todo List App
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/dashboard"
            active={location.pathname === "/dashboard" ? true : false}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/profile"
            active={location.pathname === "/profile" ? true : false}
          >
            Profile
          </Navbar.Link>
          <Navbar.Link as={"button"} onClick={handleLogout}>
            Logout
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="p-4">
        <Outlet context={user} />
      </main>
    </div>
  );
};

export default ProtectedLayout;
