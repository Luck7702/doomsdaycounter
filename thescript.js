let datestring = document.getElementById("datestring");
let text2 = document.getElementById("textz2");
let dateInput = document.getElementById("dateInput");

let Doomsday = new Date("2025-09-08");
let doomsdayhascome = 0;

function calculatedayz(Target){
    let x = (Math.ceil((Target - new Date()) / (1000 * 3600 * 24)));
    if(x <= 0 ){

        doomsdayhascome = 1;
        return ("Doomsday has come");
        
    }

    doomsdayhascome = 0;
    return String((x)+" Days");
    
}

function calculateText(date){

    let targetDate = date;

    let day = targetDate.getDate();
    let month = targetDate.getMonth();  // Months are 0-indexed
    let year = targetDate.getFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];    

    return (`${day}` + " " + `${monthNames[month]}` + " " + `${year}`);

}

let bruhDate = calculatedayz(Doomsday);

datestring.textContent = calculateText(Doomsday);
text2.textContent = bruhDate

text2.addEventListener("mouseenter",function(){

    if(doomsdayhascome == 1){
        text2.textContent = "May God be with You";
        return;
    }
    text2.textContent = "Is the same as from "  + 
    (calculateText((new Date  ((Number((new Date()) - (Doomsday - new Date())))-(1000*3600*7)))  )) + " to now";
    console.log("As From : " + (new Date  ((Number((new Date()) - (Doomsday - new Date())))-(1000*3600*7))));
})

text2.addEventListener("mouseleave",function(){

    text2.textContent = calculatedayz(Doomsday)

})

datestring.addEventListener("click",function(){

    dateInput.showPicker();
    dateInput.addEventListener("change", function(){
        bruhDate = calculatedayz(new Date(this.value));
        text2.textContent = bruhDate;
        Doomsday = new Date(this.value);
        datestring.textContent = calculateText(Doomsday);
    })
})
