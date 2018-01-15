# Accredible Node

To get started, run `npm install`.

You must update `config.json` to use your settings:

* `url` can be one of:
    * `https://staging.accredible.com`
    * `https://api.accredible.com`
* `key` can be found on the accredible dashboard at:
    * https://dashboard.accredible.com/issuer/dashboard/settings/api_integrations

## `node request.js`

Makes a request to the Accredible API using `request-promise`.

## `node express.js`

Starts a local server using express, then proxies GET requests to the Accredible API.

***Do not use this code in production!***

While it does hide your secret key, any user can use the endpoint to make authenticated requests to the Accredible API.

In production, you must use suitable validation and authentication routines to keep your users data secure.
