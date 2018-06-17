'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VIMEO_API: '"https://api.vimeo.com"',
  VIMEO_TOKEN: '"39d9c22e44cd73594416e1c5e18d8f35"'
})
