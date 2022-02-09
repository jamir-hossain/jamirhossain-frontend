import { lazy, Suspense } from "react";
import Works from "../pages/Works/Works";
import About from "../pages/About/About";
import { H1 } from "../Component/Typography";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import NotFount from "../pages/NotFount/NotFount";
import Achievement from "../pages/Achievement/Achievement";
import WorksDetails from "../pages/WorksDetails/WorksDetails";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<H1>Loading...</H1>}>
      <Component {...props} />
    </Suspense>
  );

// Dashboard page
const AppLayout = Loadable(lazy(() => import("../Component/layout/AppLayout")));

// routes
export const all_routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/project/:id",
        element: <WorksDetails />,
      },
      {
        path: "/achievement",
        element: <Achievement />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFount />,
  },
];
