

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
keys.forEach(key => key.addEventListener('transitionend', removeTransistion)); // mamy event list. transistionend