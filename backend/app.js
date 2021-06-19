const express = require("express");
const Sequelize = require("sequelize");

const { sqlPassword } = require('../secret');

const app = express();

const sequelize = new Sequelize(
  `postgres://trust_our_leader:${sqlPassword}@host.docker.internal:5432/postgres`
);




