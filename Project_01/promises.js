// import redis from 'redis';

// const client = redis.createClient({
//     host: '127.0.0.1', // Redis server host
//     port: 6379,
// });

// client.on('connect', ()=>{
//     console.log('You are connected to redis server!')
// });

// client.on('error', (err)=>{
//     console.log(err);
// });

// client.on('ready', ()=>{
//     console.log('Redis is ready!');

//     client.get('data', (err, cachedData)=>{
//         if(err) throw err;
//         console.log(`this is your data ${cachedData}`);
//         if (cachedData){
//             console.log('Your data is already set');
//         }else{
//             const dbData = "This your data from db";
//             client.set('data', dbData);
//             console.log(dbData);
//         }
//     });

// });

import express from 'express';

const app = express();
const port = 5000;
app.listen(port, ()=> console.log(`Server started at ${port}!!`));

const cart = ["shoes", "table", "chair"];
createOrder(cart) // createOrder async function
// Promise is an object which represents the completion and failure of an async function. Promise can be pending, fulfilled, rejected.
.then(function (orderId){
    return paymentGateway(null);
})
.then(function(orderId){
  return showSummary(orderId);
})
.then(function({orderId, amount}){
   return updateWallet({orderId, amount});
})
.catch(function(err){
    console.log(err);
});

///////////////////////////////////////////////////////////////////////////////////////////////


function createOrder(cart){

    return new Promise(function (resolve, reject){

        if(!validateCart(cart)){
            const err = new Error("Your cart is not valid!");
            reject(err);
        }
        
        const orderId = "1234567890";

        if(orderId == ""){
            reject("Order Not Found!");
        }

        if(orderId && orderId != ""){
            setTimeout(function (){
                console.log("Your order is created successfully!");
                resolve(orderId);
            },3000);
        }

    })
}

function validateCart(cart){
    return cart.length > 0;
}

function paymentGateway(orderId){
    
    return new Promise(function(resolve, reject){

        if(orderId){
            setTimeout(function (){
                console.log("Payment Successfull!");
                resolve(orderId);
            },5000);
        }
        else {
            reject("Payment Failed!")
        }

    });
}

function showSummary(orderId){
    
    return new Promise(function(resolve, reject){
        const amount = 100;
        if(orderId){
            setTimeout(function(){
                console.log("Order summary is Successfully Updated!");
                resolve({orderId, amount});
            },8000);
        }
        else {
            reject("Something went wrong while updating Order summary!")
        }
   });
}

function updateWallet({orderId, amount}){

    return new Promise(function(resolve, reject){

        if(orderId && amount != null){
            setTimeout(function(){
                console.log("Your New Wallet Amount Updated Successfully!");
                resolve();
            },10000)
        } else {
            reject("Wallet amount is not updated! something went wrong!")
        }
    });
}