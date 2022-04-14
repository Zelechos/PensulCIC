'use strict'

export default function switchApproved(){

    document.addEventListener("click", e=>{
        console.log(e.target);
    })
    const $button = document.querySelector('.checkboxes');
    
    const $ball = document.querySelector(".ball");
    
    $button.addEventListener('click', (e)=>{
        console.log(e.target);
        $ball.classList.toggle("ball");
        $ball.classList.toggle("darkball");
    });
}
