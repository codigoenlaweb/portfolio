import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "../../app/common/pages/Menu";
import { routes } from "./routes";
import { BurgerX } from "../../app/common/components/icons/BurgerX";
import Loading from "../../app/common/pages/Loading";
import { Arrow } from "../../app/common/components/icons/Arrow";
import { Head1 } from "../../app/common/components/typography/Head1";

export const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const slides = [
    {
      route: "home",
      name: "Home",
      active: true,
    },
    {
      route: "about",
      name: "About",
      active: false,
    },
    {
      route: "portfolio",
      name: "Portfolio",
      active: false,
    },
    {
      route: "contact",
      name: "Contact",
      active: false,
    },
  ];

  console.log(slides.findIndex((a) => a.active));

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        {/* UI COMPONENTS */}
        <BurgerX setOpenMenu={setOpen} />
        <Menu open={open} />
        {slides.findIndex((a) => a.active) > 0 && (
          <Arrow text={slides.find((slide) => slide.active)?.name as string} />
        )}
        <Arrow direction="R" text="Contact" />
        {/* UI COMPONENTS */}

        {/* ROUTES */}
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
        {/* ROUTES */}
      </BrowserRouter>
    </Suspense>
  );
};
