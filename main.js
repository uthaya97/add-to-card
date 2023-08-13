function orderBtn(event) {
    let carVal = event.target.parentElement.parentElement;
    let carHead = carVal.querySelector(".head").innerHTML;
    
    if (carHead == "AADI") {
        window.location.href = "aadi-car/index.html";
    }

    else if(carHead == "MARUTHI"){
        window.location.href="maruthi-car/index.html";

     }
     else if(carHead == "HONDA"){
        window.location.href="honda-car/index.html";

     }
     else if(carHead == "MAHENDRA"){
        window.location.href="maruthi3-car/index.html";

     }
     else if(carHead == "TATA"){
        window.location.href="aadi3-car/index.html";

     }
     else if(carHead == "TOYOTA"){
        window.location.href="honda2-car/index.html";

     }
 
}