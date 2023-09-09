let max = 10
for(i=0;i<max;i++){

    let div = document.createElement('div')
    div.className="petalContainer"
    div.innerHTML='<div class="petal top"></div><div class="petal bottom"></div>'
    div.style.animationName = 'rotate'
    div.style.position = 'absolute'
    div.style.transform = 'rotate('+(i*2*(180/max))+'deg)';
    if(i+1==max){
        div.innerHTML='<div class="petal top"></div><div class="center"></div><div class="petal bottom"></div>'
    }
    document.getElementById('flowerContainer').appendChild(div)
}