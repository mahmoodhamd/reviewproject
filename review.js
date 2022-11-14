// local reviews data.
const review=[
{
id:1,
name:"Ashley smith",
job:"web devloper",
img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
text:
"iam webdevloper from ubsoft iam 23 years old web dev  iam 23 years old web dev iam 23 years old web dev iam 23 years old web dev,"

},
{

id:2,
name:"susanne sharp",
job:"game dev",
img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
text:
"iam webdevloper from ubsoft iam 23 years old web dev  iam 23 years old web dev iam 23 years old web dev iam 23 years old web dev,"

},

{

 id:3,
 name:"sam smith",
 job:"ios devloper",
 img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
 text:"hi iam an ios dev",

},
{

id:4,
name:"boi1da",
job:"iot developer",
img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
text:"hi iam an iot dev",
},





];
// select items.
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const perviousbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const randombtn=document.querySelector(".random-btn");

// set starting item.
let currentindex=0; 

window.addEventListener("DOMContentLoaded",function()
{
    showitems(currentindex);
});

// show person based on items.


// let sortedName = review.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);
// console.log("name sorted based on ascending order of their manufacture dates are:")
// console.log(sortedName);

// sorting the arrays with repect to names in an alphabetical order.

let sortedName= review.sort((p1,p2)=>{

 if(p1.name>p2.name)
 {
    console.log("name sorted alphabetically");
    return 1;
 }
 else if(p1.name<p2.name)
 {
    console.log("less than");
   return -1;
 }
 else
 {
   console.log("daku aik number han");
   return 0;
 }

});

function showitems(person)
{
    
    const item= review[person];
    
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
    
   // console.log("review"+review[person].sort()); 

}

// show next person
nextbtn.addEventListener("click",function(){

currentindex++;
if(currentindex>review.length-1)
{
    currentindex=0;
}
console.log("sa"+currentindex);
showitems(currentindex);

});


perviousbtn.addEventListener("click",function(){

currentindex--;
if(currentindex<0)
{
    currentindex=review.length-1;
}
console.log("prev"+currentindex);
showitems(currentindex);
    
});


randombtn.addEventListener("click",function(){

    // if i press the random button 
// it will pick the value from array.
// and display that one 

 currentindex=Math.floor(Math.random()*review.length);
 
 console.log(currentindex); 
 showitems(currentindex);

});



