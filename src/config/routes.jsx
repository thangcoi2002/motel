// move router

const routes = {
  notfound: "*",

  home: "/",
  user: "/user/:id",
  editProfile: "/user/:id/edit",
  booked: "/booked",
  myRoom: "/my-room",
  favorite: "/favorite",
  detail: "/detail/:id",

  search: "/search"
};

export default routes;
