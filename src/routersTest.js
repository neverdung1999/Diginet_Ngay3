import React from "react";
import HomePage from "./pages/homePage/HomePage";
import UiUserPage from "./pages/uiUserPage/UiUserPage";
import NotificationPage from "./pages/notificationPage/NotificationPage";
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
    main: ({ history }) => <UiUserPage history={history} />,
  },
  {
    path: "/notification",
    exact: true,
    main: ({ history }) => <NotificationPage history={history}  />,
  },
];

export default routers;
