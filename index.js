localStorage.clear()
var home = document.getElementById('home')
var menu = document.getElementById('menu')
var txt = '#Enjoy Food and Shopping.'
var delay = 100
var index = 0
var follower = document.getElementById('follower')
var useMore = true
var explore = document.getElementById('explore')
var write = document.getElementById('write')
var character = "|"
var textAvailable = ""
var line = document.getElementById("line")
window.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX
    const mouseY = e.clientY
    follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`
})
window.addEventListener('mousedown', ()=>{
    follower.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
    follower.style.height = '4vh'
    follower.style.width = '4vh'  
    follower.style.transition = 'height 0.5s ease, width 0.5s ease' 
})
window.addEventListener('mouseup', ()=>{
    follower.style.backgroundColor = 'rgba(1, 1, 1, 0)'
    follower.style.height = '2vh'
    follower.style.width = '2vh'   
    follower.style.transition = 'height 0.5s ease, width 0.5s ease'
})
home.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})
menu.addEventListener('click', ()=>{
    window.location.href = 'menu.html'
})
var type = ()=>{
    if(index<txt.length){
        write.innerText += txt.charAt(index)
        textAvailable += txt.charAt(index)
        index++
        setTimeout(type, delay)
    }
}
function check(){
    if(textAvailable == txt){
        return true
    }else{
        return false
    }
}
setInterval(() => {
    if(check()){
        line.style.visibility = line.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
}, 500);
window.addEventListener('DOMContentLoaded', ()=>{
    type()
})
explore.addEventListener('click', ()=>{
    window.location.href = 'menu.html'   
})