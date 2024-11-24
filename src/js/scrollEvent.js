
//获取所有box
let boxList = document.querySelectorAll('section');

//监听滚动
window.addEventListener('scroll',scrollLoad);

function scrollLoad() {

    //定义目标值
    let taggerValue = window.innerHeight * 0.8;


    //获取每一个box距离浏览器顶部的距离
    boxList.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;

        if(boxTop <= taggerValue) {
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        } 
    })
}