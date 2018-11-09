const {converToInteger , isRoman} = require('../helpers/index')
const RomainToNumerical = async(req,res)=>{
const {roman} = req.query
 if(!isRoman(roman)){
   res.status(400).json({
     succes: false,
     message: "Pleas provide valid Roman number to continue",
     roman
   })
 }
const number = await converToInteger(roman)
try{
  res.status(201).json({
    success: true,
    roman,
    number
  })

} catch(err){
  res.status(400).json({
    success: false,
    message: "Something went wrong",
    err
  })
}
}
module.exports = RomainToNumerical