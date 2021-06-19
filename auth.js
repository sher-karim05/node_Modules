// const path = require("path");
// const color = require('cli-color')
// const register = function(userName){
//     console.log(color.red`User ${userName} has registered successfully!`);
// };

// module.exports =register;

// //  dirname
// console.log(path.join(__dirname, 'node', 'app.js'))


// //fs module 
const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join(__dirname, '/test'), (err)=>{
//     if(err){
//         console.log('Something Went wrong while creating directory',err)
//         return
//     }
//     console.log('Directory created successfully.')
// });

// //Create file

// fs.writeFile(path.join(__dirname, '/test','fetch.txt'), (err) => {
//     if(err){
//         console.log('Error! file name already exists.',err)
//         return         
//     }
//     console.log('File created Successfully')
// })


// Read file
//Read file module first converts file into buffer, which is number representation of String. Buffer method is used to convert buffer into string.

fs.readFile(path.join(__dirname, 'test', 'text.txt'), (err, data) => {
    if(err){
        throw err;
    }
    // console.log(data)

    const content = Buffer.from(data);
    // console.log(content.toString());
})

//With the use of UTF-8 we can change buffer text into string

fs.readFile(path.join(__dirname, 'test','profile.txt'),'utf-8', (err, data) => {
   if(err){
    //    console.log('Error Found')
   }
//    console.log(data)
})

const os = require('os', );
// console.log('Type of Operating System:', os.type);
// console.log('plateform:', os.platform)
// console.log('CPU arctecture: ', os.arch)
// console.log('CPU details:', os.cpus())

// console.log("Free Memory:", os.freemem())
// console.log("Total Memory:", os.totalmem())

// Emitter module

const Emitter = require('events');

//create an object of the event
const myEmitter = new Emitter();

myEmitter.on('Profile', (data) => {
console.log(`I am sher karim a Node js Devleoper`)
console.log(data);
});

myEmitter.emit('Profile', {name: 'Sher karim'})

//Authrization 
 class Auth {
     register(name){
         console.log('User Registered Successfully!')
         this.emit('register', name)
     }
 }

 //Creating method of Auth class
 const auth = Auth();
 auth.register('Sher Karim')
auth.on('register',(data) =>{
    
    
    console.log(`registered scucceffuly ${data}`)
}); 

auth.register('Sher Karim')
