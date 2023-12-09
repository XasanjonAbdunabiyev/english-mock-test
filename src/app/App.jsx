import { Suspense, lazy } from "react";
import { wait } from "../services/wait";
import { Outlet, Route, Routes } from "react-router-dom";

const Home = lazy(() => wait(1000).then(() => import("../pages/Home")));
const Login = lazy(() =>
  wait(1000).then(() =>
    import("../pages/Login").then((module) => {
      return { default: module.Login };
    })
  )
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoadedPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

function LoadedPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
}
