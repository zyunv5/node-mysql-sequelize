const router = require("koa-router")();
const UserModel =require("../sql/model/user");
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";

  const user = await UserModel.create({
    username: "小李",
    password: "root",
    createAt: new Date().getTime(),
  });
  console.log('user: ', user.dataValues)
});

router.get("/search", async (ctx, next) => {
  const user = await UserModel.findAll({
    attributes:['username']
  });
  console.log('user: ', user.dataValues)//{ username: '小李' }
});

router.get("/search2", async (ctx, next) => {
  const user = await UserModel.findOne({
    where:{
      username:'小李'
    }
  })
  console.log('user: ', user.dataValues)//{ username: '小李' }
});

router.get("/update", async (ctx, next) => {
  const user = await UserModel.findOne({
    attributes:['username']
  });
  console.log('user: ', user.dataValues)//{ username: '小李' }
  console.log('user: ', user.dataValues)//{ username: '小李' }
});






router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
