/**
 * Memory Game
 *
 * Design a simple memory game.
 *  - Must have at least 16 cards (8 matches)
 *  - Cards are matched in pairs
 *  - Player can turn turnover 1 card at a time
 *  - Only 2 cards can be face-up at once.
 */
window.onload = function() {
    var start = document.querySelector('#start');
    var stop = document.querySelector('#stop');
    var boxes = document.querySelectorAll('.box');

    var matches = [];
    var totalMatched = 0;
    
    loadGame();

    start.onclick = function(){
        start.classList.add("dimStart");
        stop.classList.remove("dimStop");
        stop.disabled = false;
        startGame();
        start.disabled = true;
    }

    stop.onclick = function() {
        endGame();
    }

    function startGame() {
        var boxNames = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h'];
        for(i = 0; i < boxes.length; i++){
            j = Math.floor(Math.random() * boxNames.length);
            boxes[i].innerHTML = boxNames[j];
            boxes[i].classList.remove('reveal', 'match');
            //boxes[i].id = 
            boxNames.splice(j,1);
        }
    }

    function loadGame(){
        for(var i = 0; i < boxes.length; i++){
            boxes[i].onclick = function(){
                matches.push(this);
                this.classList.add('reveal');

                if (matches.length >= 2) {

                    if (matches[0].innerHTML == matches[1].innerHTML && matches[0] != matches[1]){
                        matches.pop().classList.add('match');
                        matches.pop().classList.add('match');
                        matches = [];
                        totalMatched += 2;
                        if(totalMatched >= 16){
                            endGame();
                        }
                    }
                    else{
                        setTimeout(() => {
                            while (matches.length > 0) {
                                matches.pop().classList.remove('reveal');
                            }                            
                        }, 400);
                    }
                }
            }
        }
    }

    function endGame(){
        totalMatched = 0;
        start.classList.remove("dimStart");
        stop.classList.add("dimStop");
        start.disabled = false;
        stop.disabled = true;
    }
}