'use strict'

class SessionController {
  async store({ request, response, auth }) {

    try {

      const data = request.only(["username", "userpassword"]);
      const dump_data = {
        username: data.username,
        password: data.userpassword,
      };
      await auth.attempt(dump_data.username, dump_data.password);
      return response.route("dashboard");

    } catch(err) {
      response.route('register')
    }

  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.route("/login");
  }
}

module.exports = SessionController
