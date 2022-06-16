const gameBoard = document.querySelector('.game-board');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btnCoin = document.querySelector('.btn-coin');

const jump = ()=> {
    //adding a class jump
    mario.classList.add('jump');
    //removing a class jump after finished animation
    setTimeout(()=> {
        mario.classList.remove('jump');

    }, 500);

    const loop = setInterval(()=> {
        //check pipe position
        const pipePosition = pipe.offsetLeft;

        //mario position + convert to number
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        // small or equal to 120px and still display in screen and mario jumps is less than 80px stop animation
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            //change image when game is over
            mario.src = './images/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
            setTimeout(()=> {
                const img = document.createElement("img");
                img.src = './images/game-over-final.png'
                gameBoard.appendChild(img);
                gameBoard.setAttribute('style', "position: absolute")
                gameBoard.setAttribute('style', "text-align:center")
        
            }, 1000);

            //stop function when if finish
            clearInterval(loop)
            btnCoin.addEventListener('click', jump);
        }

    },10)
    
}


function test(){
    console.log("here")

}
document.addEventListener('keydown', jump);
