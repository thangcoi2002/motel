// routeConfig
import config from "~/config";

// Router change Pages
import Home from "~/pages/Home";
import User from "~/pages/User";
import Favorite from "~/pages/Favorite";
import MyRoom from "~/pages/MyRoom";
import Booked from "~/pages/Booked";
import SearchClient from "~/pages/ClientSearch";
import NotFound from "~/pages/NotFound";

const publicRoutes = [
  //  show web not found when not looking for url 
  {path: config.routes.notfound, component: NotFound ,Layout: null},

  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: User },
  { path: config.routes.booked, component: Booked },
  { path: config.routes.myRoom, component: MyRoom },
  { path: config.routes.favorite, component: Favorite },

  { path: config.routes.search, component: SearchClient },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
