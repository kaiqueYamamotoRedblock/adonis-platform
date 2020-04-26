'use strict'

const User = use('App/Models/User')

class BonusController {

  async index({ request, params, reponse }) {

    // Verifica o id de indicação
    const indicated = await User.findOrFail(params.id)

    try {


      const indicated = await User.findOrFail(params.id)

    } catch((error)) {}
    console.log(indicated)


  }

}

module.exports = BonusController
