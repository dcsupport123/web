

function sendEmail(){ 
    document.getElementById("sub").innerText="Sending...";
    var params = {
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
console.log(params);
    
const serviceID= "service_9aqve6m";
const templateID= "template_124qo1x";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("sub").innerText="make an appointement";
    window.location.assign("confirmation.html")
    })
    .catch(console.log('Email is pending...'));
}

