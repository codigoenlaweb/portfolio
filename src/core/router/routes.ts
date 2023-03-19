import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const HomeRoutes = lazy(() => import('../../app/home/routes/Router'));
const ContactRoutes = lazy(() => import('../../app/contact/routes/Router'));

export const routes: Route[] = [
  {
    path: "/contact/*",
    to: "/contact/",
    Component: ContactRoutes,
    name: "Contact",
  },
  {
    path: "/*",
    to: "/",
    Component: HomeRoutes,
    name: "Home",
  },
];
