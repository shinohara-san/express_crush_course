const moment = require("moment");
//リクエスト送るたびに走る処理
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format()}`);
  next();
};

module.exports = logger;