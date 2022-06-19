const gameBoard = document.querySelector('.game-board');
const bgGameOver = document.querySelector('.bg-game-over')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btnCoin = document.querySelector('.btn-coin');

btnCoin.setAttribute('style', "display: none");

const jump = ()=> {
    //adding a class jump
    mario.classList.add('jump');
    //removing a class jump after finished animation
    setTimeout(()=> {
        mario.classList.remove('jump');

    }, 500);
    
    const img = document.createElement("img");
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;
    const loop = setInterval(()=> {
        //check pipe position

        //mario position + convert to number
    
        // small or equal to 120px and still display in screen and mario jumps is less than 80px stop animation
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

            pipe.style.animation = 'hidden';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'hidden';
            mario.style.bottom = `${marioPosition}px`;

            //change image when game is over
            mario.src = './images/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            //background image game over
            setTimeout(()=> {
                img.src = './images/game-over-final.png'
                bgGameOver.appendChild(img);
                img.setAttribute('style', "position: absolute");
                btnCoin.setAttribute('style', "display: block");
        
            }, 1000);

            //stop function when if finish
            clearInterval(loop)
        }
        
    },10)
    
    function test(){
        console.log("here")
        btnCoin.setAttribute('style', "visibility: hidden");
        img.remove()
        window.location.reload()
    
        
        
    }
    btnCoin.addEventListener('click', test);
}


document.addEventListener('keydown', jump);
