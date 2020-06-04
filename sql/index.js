
const Sequelize = require("sequelize");

const sequelizeDB = new Sequelize({
  database: "tool",
  username: "admin",
  password: "admin",
  host: "127.0.0.1",
  dialect: "mysql",
  dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', 
 },
});

sequelizeDB
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  // sequelizeDB
  // .sync({ force: true })
  // .then(() => {
  //   console.log('init db ok')
  // })
  // .catch(err => {
  //   console.log('init db error', err)
  // })

  module.exports=sequelizeDB