const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "postgres://trust_our_leader:in_jeff_we_trust@host.docker.internal:5432/postgres"
);
