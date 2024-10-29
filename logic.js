console.log("Hello Wolrld");
let string="";
let btns=document.querySelectorAll(".btn");

let display=document.querySelector(".disp");

let back=document.querySelector("#back");

let calclogo=document.querySelector(".fa-calculator");

let version=document.querySelector(".ver");

let calcbtn=document.querySelector("#calclogo");

let modebtn=document.querySelector(".fa-circle"); 

let len=15;

back.addEventListener("click",()=>{
    if(string.length>0){
        string=string.substring(0,string.length-1);
        display.innerHTML=string.length>0?string:"0";   //condition ? value_if_true : value_if_false;
    }
//check for the font size
    if(display.innerHTML.length<8){
        display.style.fontSize="13vmin";
    }
})

// Define the media query condition
const mobileView = window.matchMedia("(max-width: 1080px)");

let caltoggle=false;

calcbtn.addEventListener("click",()=>{
    let scibtn=document.querySelectorAll(".sci-btn");
   if(caltoggle===false){
      calcbtn.style.backgroundColor="grey";
      scibtn.forEach(btn=>{
        btn.classList.remove("btnhide");
     })

                  
        //Styling...

        document.querySelector(".calc").style.height="100vmin";
        document.querySelector(".calc").style.width="70vmin";
        document.querySelector(".btn-container").style.marginTop="1vmin";
        document.querySelector(".btn-container").style.marginLeft="0vmin";
        
        if (mobileView.matches) {
            // For mobile screens
            document.querySelector(".calc").style.height="190vmin";
            document.querySelector(".calc").style.width="100vmin";
            document.querySelector(".btn-container").style.marginLeft="0vmin";
            btns.forEach(btn=>{
                btn.style.height="13vmin";
                btn.style.width="18vmin";
            })
            
        } else {
            // For larger screens
            document.querySelector(".btn-container").style.marginLeft="0vmin";
            
        btns.forEach(btn=>{
            btn.style.height="7vmin";
            btn.style.width="12vmin";
        })
           
        document.querySelector(".btn-container").style.marginLeft="0vmin";
        }

         //Styling...
        

      caltoggle=true;
   }else{
        calcbtn.style.backgroundColor="#1C1C1C";
        scibtn.forEach(btn=>{
            btn.classList.add("btnhide");
         })

                     
        //Styling...

        document.querySelector(".calc").style.height="97.5vmin";
        document.querySelector(".calc").style.width="65vmin";
        document.querySelector(".btn-container").style.marginTop="5vmin";
        document.querySelector(".btn-container").style.marginLeft="0vmin";

        if (mobileView.matches) {
            // For mobile screens
            document.querySelector(".calc").style.height="190vmin";
            document.querySelector(".calc").style.width="100vmin";
            document.querySelector(".btn-container").style.marginLeft="0vmin";
            btns.forEach(btn=>{
                btn.style.height="15vmin";
                btn.style.width="18vmin";
            })
        } else {
            // For larger screens
            document.querySelector(".btn-container").style.marginLeft="0vmin";
            
        btns.forEach(btn=>{
            btn.style.height="10vmin";
            btn.style.width="10vmin";
        })
           
        document.querySelector(".btn-container").style.marginLeft="0vmin";
        }

           //Styling...

           caltoggle=false;
        }
   })

   let modetoggle=false;

//For Dark And Light Mode
modebtn.addEventListener("click",()=>{
    if(modetoggle===false){
       modebtn.style.color="black";
      document.querySelector(".calc").style.backgroundColor="white";
      display.style.color="black";

      document.querySelector("body").style.backgroundColor="black";
      // Loop through all buttons and change their styles
       modetoggle=true;
    }else{
         modebtn.style.color="white";
      document.querySelector(".calc").style.backgroundColor="black";
    display.style.color="white";
      
      document.querySelector("body").style.backgroundColor="white";
             // Loop through all buttons and change their styles
                    
            modetoggle=false;
         }
    })


btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        let wrd=btn.innerHTML;

         //check for the logo and skip
         if(btn.querySelector("i")){
            return;
         }

        //check for AC

        if(wrd==="AC"){
            display.innerHTML="0";
            string="";
            display.style.fontSize="13vmin";
            return;
        }

        //change the x to *
        if(wrd==="X"){
           string+="*";
           display.innerHTML+="X";
           return;
        }

        if(wrd==="="){
            string=eval(string);
            display.innerHTML=string;
            return;
        }

        if(display.innerHTML==="0"){
            display.innerHTML=wrd;
            string=wrd;
        }
        else{
           display.innerHTML=display.innerHTML+wrd;
           string=string+wrd;
        }

        //check for the length of the numbers
        if(display.innerHTML.length===8){
            setfunc("7vmin");
        }
      if(string.length>=13){
            disable();
        }
        
    })
});


const disable=()=>{
     btns.forEach(btn => {
        btn.disabled=true;
     });
}

function setfunc(size){
    display.style.setProperty('font-size', size, 'important');
}
