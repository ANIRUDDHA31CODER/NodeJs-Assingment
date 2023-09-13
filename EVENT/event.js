const { subscribe } = require('diagnostics_channel');
const EventEmmiter=require('events');
const { emit } = require('process');
const event=new EventEmmiter()


event.on("Subscribe",()=>{
    console.log("The User Has Subscribe");
    console.log("Thanks For Subscribe Collage Wallah");
});
// event.on("Subscribe",()=>{
//     console.log("The User Has Subscribe");
//     console.log("Thanks For Subscribe Collage Wallah");
// });
event.emit("Subscribe","Collage Wallah")

event.removeListener(EventEmmiter.on,()=>{
    console.log("Event remove");
})