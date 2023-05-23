let hanleLogin = (req,res) =>{
    return res.status(200).json({
        message:"Login Successful"
    });
}
module.exports = {
    hanleLogin: hanleLogin,
}