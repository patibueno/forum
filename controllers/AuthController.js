const User = require("../models/User");

const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  res.render("auth/login");
};

const register = async (req, res) => {
  res.render("auth/register");
};

const registerPost = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // passwords match validation
  if (password != confirmpassword) {
    req.flash("message", "As senhas não conferem, tente novamente!");
    res.render("auth/register");
    return;
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    req.flash("message", "Usuário já cadastrado, faça seu login!");
    res.render("auth/register");
    return;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
  };
  try {
    const crateadUser = await User.create(user);
    req.session.userid = crateadUser.id;
    req.flash("message", "Usuário cadastrado com sucesso");
    req.session.save(() => {
      res.redirect("/");
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, register, registerPost };
