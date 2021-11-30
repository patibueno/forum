const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("forum", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexão ok");
} catch (error) {
  console.log(`Não foi possível conectar ${console.error()}`);
}

module.exports = sequelize;
