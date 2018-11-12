const { converToRoman } = require("../helpers/index");
// const { isNumber } = require("../helpers/utill");
const numericalToRoman = async (req, res, next) => {
  const { number } = req.query;
  try {
    const roman = await converToRoman(number);
    res.status(200).json({
      success: true,
      number,
      roman
    });
  } catch (err) {
    return res.status(502).json({
      status: false,
      message: "Something went wrong",
      err
    });
  }
};
module.exports = numericalToRoman;
