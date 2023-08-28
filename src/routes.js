/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import LecturerLogin from "views/examples/LecturerLogin.js";


import Login from "views/examples/Login.js";



var routes = [
 


  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
 
  {
    path: "/LecturerLogin",
    name: "LecturerLogin",
    icon: "ni ni-key-25 text-info",
    component: <LecturerLogin />,
    layout: "/auth",
  },


];
export default routes;
