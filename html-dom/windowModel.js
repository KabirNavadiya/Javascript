const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

function handleClick(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

}

function handleClose(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


// close when Esc is pressed.
document.addEventListener('keydown',function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        handleClose();
    }
});