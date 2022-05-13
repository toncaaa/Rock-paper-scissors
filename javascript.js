function computerPlay() {
    let play = Math.random();
    console.log(play);
    if (play <= 0.33) {
        play = 'Rock'; 
    }
    else if (play > 0.33 && play < 0.66){
        play = 'Paper';
    }
    else {
        play = 'Scissors';
    }
    console.log(play);
}
computerPlay();

