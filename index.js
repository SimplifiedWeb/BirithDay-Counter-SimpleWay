
var birthday = "20 March 2023";

var days = document.getElementById("days");
var hours = document.getElementById("Hours")
var minutes = document.getElementById("Minutes");
var second = document.getElementById("Seconds")

function birthdayCountdown(){
    var tbirth = new Date(birthday);
    var todaydate = new Date();
    var tseconds =Math.floor (tbirth - todaydate)/1000;
    var tdays =Math.floor (tseconds/3600/24);
    var thours =Math.floor (tseconds/3600)%24;
    var tmin =Math.floor (tseconds/60)%60;
    var tsec  =Math.floor (tseconds)%60;

    days.innerHTML = tdays;
    hours.innerHTML = thours;
    minutes.innerHTML = tmin;
    second.innerHTML = tsec;
}

birthdayCountdown();
setInterval(birthdayCountdown,1000); // Each second we have to refresh

function celebration(){
    const balloon = document.createElement("balloon");
    const balloon1 = document.createElement("balloon1")
    const heart = document.createElement("heart");
    balloon.classList.add("balloon");
    balloon1.classList.add("balloon1");
    heart.classList.add("heart");
    balloon.innerText = "🎈";
    balloon.style.animationDuration = Math.random()*2+3;
    balloon.style.left = Math.random()*100;
    document.body.appendChild(balloon);
    balloon1.innerText = "🎈";
    balloon1.style.animationDuration = Math.random()*2+3;
    balloon1.style.left = Math.random()*100;
    document.body.appendChild(balloon1);
    heart.innerText = "🎈";
    heart.style.animationDuration = Math.random()*2+3;
    heart.style.left = Math.random()*100+"vw";
    document.body.appendChild(heart);
    setTimeout(()=>{
        balloon.remove();
    },5000)
    setTimeout(()=>{
        balloon1.remove();
    },5000)
    setTimeout(()=>{
        heart.remove();
    },5000)
}

setInterval(celebration,300)
// console.log("&#127880;")


// balloon.style.left ---> iska mtlb ki left se utni jaga chode ke 