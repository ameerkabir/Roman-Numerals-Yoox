const { converToRoman } = require("../helpers/index");
// const { isNumber } = require("../helpers/utill");
const numericalToRoman = async (req, res, next) => {
  const { number } = req.query;
  // if (!isNumber(Number(number))) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Please choose a number between 1 and 3999",
  //     number
  //   });
  // }
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
