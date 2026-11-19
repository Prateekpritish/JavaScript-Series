// what are events ? => A function triggers when activity happens any activuty is an event like cursor moving ,clicking scrolling etc so
// browser is full of events.

// we have may events like onclick event , addEventListener etc but the most used common and good is addEventListener.

// In addEventLister we choose which event it contains many events but common are click and submit 

//  syntax 

//  say example in button

const button = document.querySelector('#button')  // just to get idea a example such as storing button id element through query selector storing it in variable as same name button for undertsanding purpose
button.addEventListener('click',()=>{     //so click type event then the callback function/ normal function 
  console.log(clicked)  
})

// behind the scenes there is by default another parameter false is work with event function to understand propagation, 
// in events propagation nothing but features simply we can say 

button.addEventListener('click',()=>{     //so click type event then the callback function/ normal function 
  console.log(clicked)  
}, false) //its bydefault false so we dont write it 

button.addEventListener('click',()=>{     //so click type event then the callback function/ normal function 
  console.log(clicked)  
},true) // we need to mention it  (this true/ false are propagation)

// NOTE: true is capturing and false bydefault is bubbling  ,what happens is capturing means top to bottom 
// while bubbling means bottomm to top 
//         => to understand it clearly 
        
//         <ul>  (parent)            so in bubbling if we point li tag then li will run but it will then also run ul 
//             <li></li>(child)      means child then parent from iside bubbblt to outer bubble but in scratching its vice versa
//             <li></li>             top to bottom 
//          </ul>   

// we also have some function to stop certain default executioons of events like 

button.addEventListener('click',(e)=>{     
  console.log(clicked)  
  e.preventDefault() //stoping it running default method
  e.stopPropagation() // it stops propagating  as we talk top to bottom or bottom to top it will not anymore propagate 
  // through after  returning the main objective bubble
})