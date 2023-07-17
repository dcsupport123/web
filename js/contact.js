

function sendEmailer(){ 
    document.getElementById("text-ch").innerText="Sending...";
    var params = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value
    };
console.log(params);
    
const serviceID= "service_9aqve6m";
const templateID= "template_v2iwgwm";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("text-ch").innerText="send messege";
    alert("Your messege has been successfully Sent!");
    })
    .catch(console.log('Email is pending...'));
}