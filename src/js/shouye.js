var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');
var eimglist = document.querySelector('#imglist');
var left = 0;
var timer;
run();
function run() {
     if(left <= -5200) {
        left = 0;
    } 
    var m = Math.floor(-left / 1300);
    imgList.style.marginLeft = left + 'px';
    var n = (left % 1300 == 0) ? n = 2600 : n = 8;
    left -= 10;
    timer = setTimeout(run, n);
    icochage(m);
}
function imgchange(n){
    let It = - (n * 1300);
    imgList.style.marginLeft = It + 'px';
    left = It;
}
function icochage(m){
    for(let i = 0; i < esico.length; i++){
        esico[i].style.backgroundColor = '';
        esico[i].style.transform = '';
    }
    if(m < esico.length){
        esico[m].style.backgroundColor = '#ff0000';
        esico[m].style.transform = 'scale(1.5)';
    }
}
eicolist.onclick = function(){
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    imgchange(ico);
    icochage(ico);
}
eimglist.onmouseover = function(){ 
    clearTimeout(timer);
}
eimglist.onmouseout = function(){
    run();
}