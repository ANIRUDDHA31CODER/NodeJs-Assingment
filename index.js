const { log } = require('console')
const fs =require('fs')
console.log("Start Read");
// fs.readFile("nodejs_architecture.txt",function(error,data){
//     if(error){
//         console.log("error occurs");
//     }
//     {
//         console.log(data.toString());
//         console.log("File Read Successfully");
//     }
// })

// fs.appendFile("nodejs_architecture.txt","   1 High Performance ,   2 Scalability ,Easy to Learn,  3  Reduces Loading time using cachingImproves Response time and 4  boosts performanceLarge Community Support, 5  Cost-Effective,Extensibility",function(errrr){
//     if(errrr){
//         console.log("Error occurs during appending");
//     }
//     {
//         console.log("file append successfully");
//     }
// })

fs.unlink("nodejs_architecture.txt",function(error){
    if(error){
        console.log("error occure in deeleting file");
    }
    {
        console.log("file deleted successfully");
    }
})