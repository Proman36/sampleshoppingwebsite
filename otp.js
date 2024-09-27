var sub = document.getElementById("sub")
var otp = sessionStorage.getItem('otp')
var txt = document.getElementById('text')
sub.addEventListener('click', ()=>{
    var OTP = document.getElementById('add')
    var ov = OTP.value;
    window.location.href = 'response.html'
    if(ov == otp){
        sessionStorage.setItem("statusCode", "200")
    }else{
        sessionStorage.setItem("statusCode", "404")
    }
})