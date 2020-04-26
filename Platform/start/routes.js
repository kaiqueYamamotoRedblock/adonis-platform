'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// No Auth
Route.on('/login').render('auth/login')
Route.on("/register").render("auth/register");
Route.on("/recoverypassword").render("auth/recoverypassword");

// Post
Route.post("/register", "UserController.store")
Route.post("/login", "SessionController.store")
Route.post("/logout", "SessionController.logout")

// Reset Sessions
Route.get("logout", "SessionController.logout")

// Payment Router
Route.get("payment", "PaymentController.store")
Route.post("payment", "PaymentController.index")


// Yes Auth
Route.on("dashboard", "DashboardController.profile")
  .render("client/dashboard")
  .middleware(["auth"]);

Route
  .on("/client/user-management")
  .render("client/user-management")
  .middleware("auth");

Route
  .on("/client/my-network")
  .render("client/my-network")
  .middleware("auth");

Route
  .on("/client/live")
  .render("client/live")
  .middleware("auth");

Route
  .on("/client/study-area")
  .render("client/study-area")
  .middleware("auth");

Route
  .on("/client/sinal")
  .render("client/sinal")
  .middleware("auth");

Route
  .on("/client/financial")
  .render("/client/financial")
  .middleware("auth");

Route
  .on("/client/support")
  .render("/client/support")
  .middleware("auth");

Route
  .on("/client/settings")
  .render("/client/settings")
  .middleware("auth");
