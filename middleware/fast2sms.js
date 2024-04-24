// var unirest = require("unirest");
// console.log("FAST2SMS")
// const { json } = require('express');
// var f2s_send = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

// req.query({
//   "authorization": process.env.MY_F2S_API_KEY,
//   "variables_values": "5599",
//   "route": "otp",
//   "numbers": '8336870054'
// });

// req.headers({
//   "cache-control": "no-cache"
// });


// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });



const fast2sms = require('fast-two-sms');
// const fast2sms = require('fast2sms')

const FAST2SMS_FUN = async(phone,sms) =>{
    // try{
    //     console.log("inside fun",phone," ",sms)
    //     var options = {
    //         authorization : process.env.MY_F2S_API_KEY,
    //         message : message,
    //         numbers : [phone]
    //     }
    //     await fast2sms.sendMessage(options);
    //     const {wallet} = await fast2sms.getWalletBalance(process.env.MY_F2S_API_KEY);
    //     console.log(wallet);
    // }catch(err){
    //     console.log(err)
    //     console.log("send failed");
    //     return;
    // }
    try{
        const smsData = {
            sender_id : "FSTSMS",
            MESSAGE : sms,
            langauage : "english",
            route : 'p',
            numbers : "8336870054"
        }
        const res = await fetch("https://www.fast2sms.com/dev/bulkV2",{
            method : "POST",
            headers : {
                "authorization":"LRmpX6RsAqxrvj6iqU4swHnSobSXBiJCGzfV1m1a5JKMrDTkZOqlmQJQVRuv",
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                "route" : "otp",
                "variables_values" : "",
                "numbers" : "8336870054",
            })
        })
        // const res = await fetch(' https://www.fast2sms.com/dev/bulkV2?authorization=LRmpX6RsAqxrvj6iqU4swHnSobSXBiJCGzfV1m1a5JKMrDTkZOqlmQJQVRuv&route=dlt&sender_id=&message=&variables_values=&flash=0&numbers=')
        const jsonres = await res.json();
        console.log("Result = ",jsonres);
        const {wallet} = await fast2sms.getWalletBalance(process.env.MY_F2S_API_KEY);
        console.log(wallet);
    }catch(err){
        console.log(err);
        return;
    }
    
}

module.exports = FAST2SMS_FUN;