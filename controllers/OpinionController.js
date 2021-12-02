const Opnion = require("../models/Opinion");
const User = require("../models/User");

const showOpinions = async (req, res) => {
  res.render("opinioes/home");
};

module.exports = { showOpinions };
