const Sequelize = require("sequelize");
const sequelizeDB = require("../index");
const UserModel = sequelizeDB.define(
  "user",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {type:Sequelize.STRING, allowNull: false},
    createdAt: Sequelize.BIGINT,
  },
  {
    timestamps: false, //如果不设置 timestamps，Sequlize 会自动为我们添加创建时间和更新时间，我一般选择关闭，手动添加灵活性高些。
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  }
);

module.exports=UserModel;
