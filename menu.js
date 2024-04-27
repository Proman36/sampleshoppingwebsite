var home = document.getElementById('home')
var menu = document.getElementById('menu')
var p = document.getElementById('data')
var follower = document.getElementById('follower')
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')
var c7 = document.getElementById('c7')
var c8 = document.getElementById('c8')
var c9 = document.getElementById('c9')
var c10 = document.getElementById('c10')
var cof1 = document.getElementById('cof1')
var cof2 = document.getElementById('cof2')
var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var w1 = document.getElementById('w1')
var w2 = document.getElementById('w2')
var f1 = document.getElementById('f1')
var f2 = document.getElementById('f2')
var v1 = document.getElementById('v1')
var v2 = document.getElementById('v2')
var s1 = document.getElementById('s1')
var s2 = document.getElementById('s2')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var fi1 = document.getElementById('fi1')
var fi2 = document.getElementById('fi2')
var ch1 = document.getElementById('ch1')
var ch2 = document.getElementById('ch2')
var cofCount = 0
var tCount = 0
var bCount = 0
var wCount = 0
var fCount = 0
var vCount = 0
var sCount = 0
var pCount = 0
var fiCount = 0
var chCount = 0
var add = document.getElementById('add')
var userOrder = {
    coffee: 0,
    tea: 0,
    biscuits: 0,
    water: 0,
    fruits: 0,
    vegetables: 0,
    stew: 0,
    paratha: 0,
    fish: 0,
    chicken: 0
}
var price = 0
window.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX
    const mouseY = e.clientY
    follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`
})
window.addEventListener('mousedown', ()=>{
    follower.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
    follower.style.height = '4vh'
    follower.style.width = '4vh'  
    follower.style.transition = 'height 0.1s ease, width 0.1s ease' 
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
cof1.addEventListener('click', ()=>{
    cofCount++
    c1.innerText = cofCount
})
cof2.addEventListener('click', ()=>{
    if (cofCount == 0) {
        cofCount = 0
    } else {
        cofCount--
        c1.innerText = cofCount
    }
})
t1.addEventListener('click', ()=>{
    tCount++
    c2.innerText = tCount
})
t2.addEventListener('click', ()=>{
    if (tCount == 0) {
        tCount = 0
    } else {
        tCount--
        c2.innerText = tCount
    }
})
b1.addEventListener('click', ()=>{
    bCount++
    c3.innerText = bCount
})
b2.addEventListener('click', ()=>{
    if (bCount == 0) {
        bCount = 0
    } else {
        bCount--
        c3.innerText = bCount
    }
})
w1.addEventListener('click', ()=>{
    wCount++
    c4.innerText = wCount
})
w2.addEventListener('click', ()=>{
    if (wCount == 0) {
        wCount = 0
    } else {
        wCount--
        c4.innerText = wCount
    }
})
f1.addEventListener('click', ()=>{
    fCount++
    c5.innerText = fCount   
})
f2.addEventListener('click', ()=>{
    if (fCount == 0) {
        fCount = 0
    } else {
        fCount--
        c5.innerText = fCount
    }
})
v1.addEventListener('click', ()=>{
    vCount++
    c6.innerText = vCount
})
v2.addEventListener('click', ()=>{
    if (vCount == 0) {
        vCount = 0
    } else {
        vCount--
        c6.innerText = vCount
    }
})
s1.addEventListener('click', ()=>{
    sCount++
    c7.innerText = sCount
})
s2.addEventListener('click', ()=>{
    if (sCount == 0) {
        sCount = 0
    } else {
        sCount--
        c7.innerText = sCount
    }
})
p1.addEventListener('click', ()=>{
    pCount++
    c8.innerText = pCount
})
p2.addEventListener('click', ()=>{
    if (pCount == 0) {
        pCount = 0
    } else {
        pCount--
        c8.innerText = pCount
    }
})
fi1.addEventListener('click', ()=>{
    fiCount++
    c9.innerText = fiCount
})
fi2.addEventListener('click', ()=>{
    if (fiCount == 0) {
        fiCount = 0
    } else {
        fiCount--
        c9.innerText = fiCount
    }
})
ch1.addEventListener('click', ()=>{
    chCount++
    c10.innerText = chCount
})
ch2.addEventListener('click', ()=>{
    if (chCount == 0) {
        chCount = 0
    } else {
        chCount--
        c10.innerText = chCount
    }
})
add.addEventListener('click', ()=>{
    userOrder.coffee = cofCount
    userOrder.tea = tCount
    userOrder.biscuits = bCount
    userOrder.water = wCount
    userOrder.fruits = fCount
    userOrder.vegetables = vCount
    userOrder.stew = sCount
    userOrder.paratha = pCount
    userOrder.fish = fiCount
    userOrder.chicken = chCount
    localStorage.clear()
    localStorage.setItem('userOrder', JSON.stringify(userOrder))
    price = (cofCount*40 + tCount*30 + bCount*40 + wCount*20 + fCount*30 + vCount*50 + sCount*90 + pCount*20 + fiCount*100 + chCount*140) * 106/100
    localStorage.setItem('price', price)
    window.location.href = 'order.html'
})