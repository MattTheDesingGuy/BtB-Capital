import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { WhoWeWorkWith } from "./pages/WhoWeWorkWith";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "who-we-work-with", Component: WhoWeWorkWith },
        { path: "how-it-works", Component: HowItWorks },
        { path: "about", Component: About },
        { path: "contact", Component: Contact },
      ],
    },
  ],
  { basename: "/BtB-Capital" },
);