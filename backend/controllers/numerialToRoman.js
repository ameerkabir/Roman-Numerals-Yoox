const  {converToRoman} = require("../helpers/index");
const numericalToRoman = async (req, res, next) => {
  // console.log("req body",req);
  const { number } = req.query;
  try {
    const roman = await converToRoman(number);
    console.log('back from the apiiiiiiiiiiiiiiii',{roman, number})
    res.status(201).json({
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
