// const mongoose = require("mongoose");

// const db = async () => {
//   try {
//     const Link_db = `${process.env.db_link}`;
//     console.log(Link_db)
//     const con = await mongoose.createConnection(process.env.db_link);
//     if (con) {
//       console.log("Database are connected........");
//     }
//     return con;
//   } catch (err) {
//     console.log(err);
//     console.log("Database connection Error");
//     return;
//   }
// };

// db();
// module.exports = db;


const mongoose = require('mongoose');

module.exports.connectFun = async()=>{
    try{
        await mongoose.connect(process.env.db_link);
        console.log("Database Successfully Connected...........");
    }catch(err){
        // console.log(err);
        console.log("Database not connected");
        return;
    }
}
