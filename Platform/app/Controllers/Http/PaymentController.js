'use strict'

// const base64ToImage = require("base64-to-image");
const fetch = use("node-fetch")
// const bluebird = require("bluebird");

class PaymentController {

  async store({ request, response, params }) {


    const referencie_id = Math.random() * 10000;

    await fetch(process.env.PICPAY_URL_PAYMENT, {
      headers: {
        "x-picpay-token": process.env.PICPAY_KEY_TOKEN,
        "x-seller-token": process.env.PICPAY_KEY_SELLE,
        Accept: "application/json",
        "Content-Type": "application/json",
        "accept-encoding": "gzip, deflate",
      },

      method: "POST",

      body: JSON.stringify({
        referenceId: referencie_id,
        callbackUrl: process.env.PICPAY_CALLBACK_URL,
        returnUrl: process.env.PICPAY_RETURN_URL + "102030",
        value: process.env.PICPAY_AMAOUNT,
        expiresAt: "2022-05-01T16:00:00-03:00",
        buyer: {
          firstName: "João",
          lastName: "Da Silva",
          document: "123.456.789-10",
          email: "teste@picpay.com",
          phone: "+55 27 12345-6789",
        },
      }),
    })
      .then((result) => console.log(result))
      .catch((err) => {
        view.render(err);
        console.log(`${err}`);
      });

  }

}

module.exports = PaymentController
