'use strict'

const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    try {
      const data = request.only([
        "full_name",
        "username",
        "email",
        "user_password",
        "mo_number",
      ]);
      const dump_data = {
        full_name: data.full_name,
        username: data.username,
        email: data.email,
        password: data.user_password,
        phone: data.mo_number,
      };
      const user = await User.create(dump_data);
      return response.route("login");
    } catch (error) {
      return response.route("register");
    }

  }

}

module.exports = UserController
