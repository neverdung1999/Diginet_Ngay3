import React from "react";
import HomePage from "./pages/homePage/HomePage";
import UiUserPage from "./pages/uiUserPage/UiUserPage";
import NotificationPage from "./pages/notificationPage/NotificationPage";
import ScreenPage from "./pages/screenPage/ScreenPage";
import NewsPage from "./pages/newsPage/NewsPage";

const routers = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  {
    path: "/news/:id",
    exact: true,
    main: ({ history }) => <NewsPage history={history} />,
  },
  {
    path: "/uiUser",
    exact: true,
    main: () => <UiUserPage />,
  },
  {
    path: "/notification",
    exact: true,
    main: () => <NotificationPage />,
  },
  {
    path: "/screen/:id",
    exact: false,
    main: ({ history }) => <ScreenPage history={history} />,
  },
];

export default routers;
