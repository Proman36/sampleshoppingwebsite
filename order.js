var otp;
var sub = document.getElementById("sub")
var checkOrder = document.getElementById("btn")

checkOrder.addEventListener('click', download)

function download(){
  var content = JSON.stringify(localStorage.getItem('userOrder'));
  var file = new File(["\ufeff"+content], 'order.txt', {type: "text/plain:charset=UTF-8"});
  url = window.URL.createObjectURL(file);
  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = file.name;
  a.click();
  window.URL.revokeObjectURL(url);
}

function otpGen() {
    return Math.floor(1000 + Math.random() * 9000)
}

emailjs.init("KaT7rZQQjvE8M92E0");

sub.addEventListener("click", () => {
    console.log("Done")
    otp = otpGen()
    sessionStorage.setItem('otp', otp)

    var params = {
        userID: document.getElementById("em").value,
        user: document.getElementById("nm").value,
        order: sessionStorage.getItem("userOrder"),
        price: sessionStorage.getItem("price"),
        message: "Your OTP is: " + otp
    }

    var serviceID = "gmail1"
    var templateID = "template1";

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert("Success");
            window.location.href = "otp.html";
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please check your EmailJS public key and template.");
        });
});
