// let jsondata ='{"fact":"A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952.","length":107}';
// let jsonfact = JSON.parse(jsondata);
// console.log(jsondata);
// console.log(jsonfact.fact);
// let student ={
//     name : "deepak",
//     marks: 199,
// };         
// let url="https://catfact.ninja/fact";
// fetch(url);

let btn= document.querySelector("button");
btn.addEventListener("click",async()=>
{
    // console.log("button was clicked");
    let fact=  await  getfacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText  = fact;
})
let url="https://catfact.ninja/fact";
async function getfacts()
{
    try{
        let res = await axios.get(url);
        return (res.data.fact);
    }
    catch(e){
        console.log("error -",e);
        return "no fact found error 404 ";
 
    }
   

}


let url2="https://dog.ceo/api/breeds/image/random";  
let btn2=document.querySelector("#btn");
btn2.addEventListener("click",async()=>{
    let link = await img();
    let pit=document.querySelector("#photo");
    pit.setAttribute("src", link);
});
 async function img(){
         
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;

    }
    catch(e){
        console.log("error -",e);
        return "error not found 404 ";
    }
 }
 let url3 ="https://icanhazdadjoke.com/"; 
 async function getjokes(){
    try{
        const config ={
            headers : {Accept:"application/json"}
        };
           let res = await axios.get(url3,config);
           console.log(res.data);
    }
    catch(e)
    {
        console.log("error 404 not found ",e);
    }
 }