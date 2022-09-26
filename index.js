console.log("connected")

let sh=document.querySelector('.second-hand');
let mh=document.querySelector('.min-hand');
let hh=document.querySelector('.hour-hand');


function setdate(){
    let time= new Date();
    console.log(time);
    let hours =time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds();
    rotateS(second);
    rotateM(minutes);
    rotateH(hours);
    
}
function rotateH(h){
    let z=(h/24)*720 +90;
    
    hh.style.transform='rotate('+z+'deg)';
    if(z===90){
        hh.style.transition='all 0s';
    }
}
function rotateM(m){
    let a=m*6 +90;
    mh.style.transform='rotate('+a+'deg)';
    if(a===90){
        mh.style.transition='all 0s';
    }
}
function rotateS(s){
    let a=s*6+90;
    console.log(a)
    sh.style.transform='rotate('+a+'deg)';
    if(a===90){
        sh.style.transition='all 0s';
    }
    
}

setInterval(setdate,1000);