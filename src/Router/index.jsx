import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
} from "react-router-dom";
import {
  About,
  Create,
  Dashboard,
  ErrorPage,
  Home,
  Login,
  Profile,
  Register,
} from "../Pages";
import AuthLayout from "../Pages/Layout/AuthLayout";
import MainLayout from "../Pages/Layout/MainLayout";
import ProtectedLayout from "../Pages/Layout/ProtectedLayout";

const getUserData = () => {
  const user = localStorage.getItem("user");
  return user;
};

const routes = createRoutesFromElements(
  <Route
    element={<AuthLayout />}
    loader={() => defer({ userPromise: getUserData() })}
    errorElement={<ErrorPage />}
  >
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />

    {/* Guest Route */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>

    {/* Authenticated Route */}
    <Route element={<ProtectedLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
