const express=require('express')
var bodyParser = require('body-parser')
var timeout = require('connect-timeout')

const app= express()
// console.log(app)


// app.use('/home', timeout('5s'), bodyParser.json(), haltOnTimedout, function (req, res, next) {
//     savePost(req.body, function (err, id) {
//       if (err) return next(err)
//       if (req.timedout) return
//     //   res.send('home as id ' + id)
//     res.sendFile(__dirname + '/public/home.html')
   
    
//     })
//   })
  
//   function haltOnTimedout (req, res, next) {
//     if (!req.timedout) next()
//   }
  
//   function savePost (post, cb) {
//     setTimeout(function () {
//       cb(null, ((Math.random() * 40000) >>> 0))
//     }, (Math.random() * 7000) >>> 0)
//   }


// app.use(function(req, res, next){
//     res.setTimeout(120000, function(){
//         console.log('Request has timed out.');
//             res.send(408);
//         });

//     next();
// });















// addRequestDate=(req,res,next)=>{

// let requestAt=new Date()
// console.log(requestAt)
// var hour= requestAt.getHours()
// if(hour>8 && hour>17){

//     app.use(express.static(__dirname + '/public'),next())
// }
// else {
//     res.send("closed")
// }

// }



app.use((req,res,next)=>{

    let requestAt=new Date()
    console.log(requestAt)
    var hour= requestAt.getHours()
    console.log(hour)
if(hour>8 && hour<17){
    next()
    app.use(express.static(__dirname + '/public'))
    // app.use(express.static(__dirname + '/public'),next())
}
else {
    res.send("Our office is not open now")
}






})
// app.get('/home',addRequestDate,(req,res)=>{

// res.sendFile(__dirname + '/public/home.html')



// })

// app.get('/contact',addRequestDate,(req,res)=>{

//     res.sendFile(__dirname + '/public/contact.html')
    
    
    
//     })

//     app.get('/ourservices',addRequestDate,(req,res)=>{

//         res.sendFile(__dirname + '/public/ourservices.html')
        
        
        
//         })
// app.use(express.static(__dirname + '/public')


// app.get('/home',(req,res)=>{

//     res.send("Hello this the home page")


// })













app.listen(3000,(err)=>{

if(err) console.log("server is not running")

else console.log("server is running on port 3000")

})