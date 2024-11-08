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
        document.querySelector(".fa-linkedin").style.marginTop="90vmin";
        document.querySelector(".fa-linkedin").style.marginLeft="1vmin";
        
        if (mobileView.matches) {
            // For mobile screens
            document.querySelector(".calc").style.height="180vmin";
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
        document.querySelector(".fa-linkedin").style.marginTop="3vmin";
        document.querySelector(".fa-linkedin").style.marginLeft="-15vmin";

        if (mobileView.matches) {
            // For mobile screens
            document.querySelector(".calc").style.height="170vmin";
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
      document.querySelector(".fa-linkedin").style.color="black";
      document.querySelector(".fa-github").style.color="black";

       modetoggle=true;
    }else{
         modebtn.style.color="white";
      document.querySelector(".calc").style.backgroundColor="black";
    display.style.color="white";
      
      document.querySelector("body").style.backgroundColor="white";
      document.querySelector(".fa-linkedin").style.color="white";
      document.querySelector(".fa-github").style.color="white"; 
      
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
           // Check if wrd is not "sin" or "cos And Other Sci-fi btns...so It would not show in display "
         if (wrd !== "sin" && wrd !== "cos"&& wrd !== "tan"&& wrd !=="log"&& wrd !=="x²"&& wrd !=="x⁴"&& wrd !=="Inverse"&& wrd !=="sin⁻¹"&& wrd !=="cos⁻¹"&& wrd !=="tan⁻¹") {
           display.innerHTML = display.innerHTML + wrd;
           string = string + wrd;
        }else if(wrd==="Inverse"){
            display.innerHTML="0";
        }
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

//Sci-btns functionality...


function sin(){
    const inputValue = parseFloat(display.innerHTML); // Convert to a number
    if (inverse) {
        // Calculate inverse sine (sin⁻¹) in degrees, check if input is within range [-1, 1]
        if (inputValue >= -1 && inputValue <= 1) {
            string = Math.asin(inputValue) * (180 / Math.PI);
            display.innerHTML = string.toFixed(4);
        } else {
            display.innerHTML = "Invalid";
        }
    } else {
        // Calculate sine with input in degrees
        string = Math.sin(inputValue * (Math.PI / 180));
        display.innerHTML = string.toFixed(4);
    }
}

function cos(){
    const inputValue=parseFloat(display.innerHTML);
    if(inverse){
         // Calculate inverse sine (cos⁻¹) in degrees, check if input is within range [-1, 1]
        if(inputValue>=-1&&inputValue<=1){
        string=Math.acos(inputValue) * (180/Math.PI);         //display.innerHTML * (180 / Math.PI);
        display.innerHTML=string;
         }
         else{
           display.innerHTML="Invalid";
         }
    }
     else{
          string=Math.cos(inputValue) * (Math.PI /180);        
        display.innerHTML=string;
      }
        display.innerHTML=string.toFixed(4);
}

function tan(){
    const inputValue=parseFloat(display.innerHTML);
    if(inverse){
        string=Math.atan(inputValue) * (180/Math.PI);         //display.innerHTML * (180 / Math.PI);
        display.innerHTML=string;
      }else{
          string=Math.tan(inputValue) * (Math.PI /180);        
        display.innerHTML=string;
      }
        display.innerHTML=string.toFixed(4);
    
}

function sqrt(){
    string=Math.sqrt(display.innerHTML);     
    display.innerHTML=string.toFixed(4);
}

function log(){
    string=Math.log10(display.innerHTML);     
    display.innerHTML=string.toFixed(4);
}

function pow(){
    string=Math.pow(display.innerHTML,2);     
    display.innerHTML=string;
}
function pow4(){
    string=Math.pow(display.innerHTML,4);     
    display.innerHTML=string;
}

let inv=document.querySelector("#inverse");

let inverse=false;

function invs(){
    if(inverse===false){
    document.querySelector("#sin").innerHTML = "sin⁻¹";
    document.querySelector("#cos").innerHTML = "cos⁻¹";
    document.querySelector("#tan").innerHTML = "tan⁻¹";
    inverse=true;
}   else{
    document.querySelector("#sin").innerHTML = "sin";
    document.querySelector("#cos").innerHTML = "cos";
    document.querySelector("#tan").innerHTML = "tan";
    inverse=false;
}
}
