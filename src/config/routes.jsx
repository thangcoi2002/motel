// move router

const routes = {
  notfound: "*",

  home: "/home",
  profile: "/profile",
  editProfile: "/profile/edit",
  user: "/user/:id",
  booked: "/booked",
  favorite: "/favorite",
  detail: "/detail/:id",
  editMotel: "/detail/edit/:id",
  postMotel: "/post-motel",
  PaymentSuccess: "/payment-success",

  search: "/search"
};

export default routes;
