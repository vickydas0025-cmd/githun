// Booking Page
function goToRoute(){

    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let date=document.getElementById("date").value;

    if(name==""||age==""||date==""){
        alert("Please fill all details.");
        return;
    }

    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    localStorage.setItem("date",date);

    window.location.href="route.html";
}

// Route Page
function bookTicket(){

    let pnr=Math.floor(1000000000+Math.random()*9000000000);

    localStorage.setItem("pnr",pnr);

    window.location.href="ticket.html";
}

// Ticket Page
window.onload=function(){

    if(document.getElementById("pnr")){

        document.getElementById("pnr").innerText=localStorage.getItem("pnr");
        document.getElementById("tname").innerText=localStorage.getItem("name");
        document.getElementById("tage").innerText=localStorage.getItem("age");
        document.getElementById("tdate").innerText=localStorage.getItem("date");

    }

};
