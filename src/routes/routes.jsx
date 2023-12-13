// routeConfig
import config from "~/config";

// Router change Pages
import Home from "~/pages/Home";
import {Profile ,EditProfile} from "~/pages/Profile";
import Favorite from "~/pages/Favorite";
import Booked from "~/pages/Booked";
import Detail from "~/pages/Detail";
import SearchClient from "~/pages/ClientSearch";
import NotFound from "~/pages/NotFound";
import User from "~/pages/User";
import PostMotel from "~/pages/PostMotel";
import PaymentSuccess from "~/pages/PaymentSuccess";

const publicRoutes = [
  //  show web not found when not looking for url 
  {path: config.routes.notfound, component: NotFound ,Layout: null},

  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.user, component: User },
  { path: config.routes.booked, component: Booked },
  { path: config.routes.favorite, component: Favorite },

  { path: config.routes.detail, component: Detail },

  { path: config.routes.editProfile, component: EditProfile },
  { path: config.routes.postMotel, component: PostMotel },
  { path: config.routes.PaymentSuccess, component: PaymentSuccess },

  { path: config.routes.search, component: SearchClient },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
