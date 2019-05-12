

window.addEventListener('keydown', function(el){
    const audio= document.querySelector(`audio[data-key="${el.keyCode}"]`);
    const key= document.querySelector(`.key[data-key="${el.keyCode}"]`)
    audio.currentTime= 0
    audio.play()
     if(!audio) return ;
     key.classList.toggle('playing')   
});

function removeTransistion(el){
    console.log()
    if(el.propertyName !== 'transform') return // wiemy, ze mamy
    this.classList.remove('playing')
}

const keys= document.querySelectorAll('.key');

keys.forEach(key=> key.addEventListener('click', function(el){
    const keyNr= el.target.getAttribute('data-key')
    console.log(keyNr)
    const audio=document.querySelector(`audio[data-key="${keyNr}"]`)
    audio.currentTime= 0
    audio.play()
     if(!audio) return ;
     key.classList.toggle('playing')   
})
);

console.log('dupa')

keys.forEach(key => key.addEventListener('transitionend', removeTransistion)); // mamy event list. transistionend
