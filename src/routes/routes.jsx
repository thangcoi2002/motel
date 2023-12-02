// routeConfig
import config from '~/config';

// Router change Pages
import Home from '~/pages/Home';
import User from '~/pages/User';
import SearchClient from '~/pages/ClientSearch';

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.user, component: User},
    { path: config.routes.search, component: SearchClient}
]; 

const privateRoutes = []; 

export {publicRoutes ,privateRoutes};