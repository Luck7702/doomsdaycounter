const DAY_IN_MS  = (86400000);    // Amount of Milliseconds in a Day
const OFFSET     = (25200000);    // 7 Hours difference cuz of UTC +7

let datestring = document.getElementById("datestring");
let text2 = document.getElementById("textz2");
let dateInput = document.getElementById("dateInput");

let Doomsday = new Date("2025-09-08"); Doomsday -= OFFSET; 
let doomsdayhascome = 0;

function calculatedayz(Target){

    let x = (Math.ceil((Target - new Date()) / (1000 * 3600 * 24)));

    if(x <= 0 ){doomsdayhascome = 1;
        return ("Doomsday has come");        
    }; doomsdayhascome = 0;

    return String((x)+" Days");
}

function calculateText(date){

    let targetDate = new Date(date);

    let day = targetDate.getDate();
    let month = targetDate.getMonth(); 
    let year = targetDate.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];    

    return (`${day}` + " " + `${monthNames[month]}` + " " + `${year}`);
}

datestring.textContent = calculateText(Doomsday);
text2.textContent      = calculatedayz(Doomsday);


//////////////////////////////////--MAIN FUNCTION--///////////////////////////////////////////////


text2.addEventListener("mouseenter", function(){

    if(doomsdayhascome == 1){
        text2.textContent = Math.abs(Math.ceil((Doomsday - new Date()) / (1000 * 3600 * 24)) ) + " days have passed";
        return;
    }
    text2.textContent = "Same as "  +  
    (calculateText((new Date  ((new Date()) - ((Doomsday - new Date())))))) + " until now";

    console.log("As From : " + (new Date  ((new Date()) - ((Doomsday - new Date())))));
    console.log("Current Date : " + new Date());
    console.log("Doomsday : " + new Date(Doomsday));
})

text2.addEventListener("mouseleave", function(){text2.textContent = calculatedayz(Doomsday)})

datestring.addEventListener("click", function(){ 

    dateInput.showPicker();
   
})

dateInput.addEventListener("change", function(){
        
    Doomsday = new Date(this.value); Doomsday -= OFFSET;
    
    bruhDate = calculatedayz(Doomsday); text2.textContent = bruhDate;
    datestring.textContent = calculateText(Doomsday);
})
