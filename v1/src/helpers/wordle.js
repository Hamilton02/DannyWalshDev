

const WordleBack = () => {
    const words = ["lucky", "super", "reese", "baldy", "bergy", "child", "gummy", "dummy", "potty", "space"];
    let section = document.querySelector('#boxes');
    const numRows = 6;
    const numCols = 5;
    let rows = [];
    let guessNum = 0;
    let letterNum = 0;
    let curGuess = "";
    //let goldenWord = words[Math.floor(Math.random() * words.length)];
    let goldenWord = words[4];
    let numCorrect = 0;
    let result = false;


    function generateBoxes(){
        for(let i = 0; i < numRows; i++){
            let curRow = document.createElement(`section`);
            curRow.classList.add(`row`);
            for(let j = 0; j < numCols; j++){
                curRow[j] = document.createElement('span');
                curRow[j].classList.add(`box`);
                curRow.appendChild(curRow[j]);
            }
            rows[i] = curRow;
            section.appendChild(rows[i]);
            
        }
        console.log(rows);
        console.log(`golden word ${goldenWord}`);
    }



    document.addEventListener('keydown', (e) => {
        console.log(e.key);
        if(e.key === "Backspace" && letterNum !== 0){
            letterNum--;
            rows[guessNum][letterNum].innerHTML = "";
            curGuess = curGuess.substring(0, letterNum);
            console.log(curGuess);
        }else if(letterNum <= 4 && isLetter(e.key)){
            rows[guessNum][letterNum].innerHTML = e.key;
            letterNum++;
            curGuess = curGuess + e.key
        }else if(letterNum === 5 && e.key === "Enter"){
            checkGuess(curGuess);
            curGuess = "";
        }
    })

    function checkGuess(guess){
        console.log("checking guess");
        guess = guess.toLowerCase();
        if(guessNum != 5){
            result = checkLetters(guess);
            if(result){
                console.log('You won!');
                setTimeout(() => {
                    reset()
                }, 5000);
            }else{
                letterNum = 0;
                guessNum++;
            }
        }else{
            console.log('game over');
            reset();
        }
        
    }

    function checkLetters(guess){
        let guessArr = guess.split('');
        let answerArr = goldenWord.split('');
        console.log(`guessArr: ${guessArr} \nanswerArr: ${answerArr}`)
        for(let i = 0; i < guessArr.length; i++){
            if(guessArr[i] === answerArr[i]){
                    rows[guessNum][i].classList.add('correct');
                    numCorrect++;
            }else if(answerArr.includes(guess[i])){
                    rows[guessNum][i].classList.add('close');
            }else{
                rows[guessNum][i].classList.add('wrong');
            }
        }
        if(numCorrect === 5){
            return true;
        }else{
            numCorrect = 0;
        }
    }

    function reset(){
        for(let i = 0; i < numRows; i++){
            for(let j = 0; j < numCols; j++){
                rows[i][j].innerHTML = "";
                rows[i][j].classList.remove('correct');
                rows[i][j].classList.remove('wrong');
                rows[i][j].classList.remove('close');
            }
        }
        curGuess = "";
        guessNum = 0;
        letterNum = 0;
        numCorrect = 0;
        goldenWord = words[Math.floor(Math.random() * words.length)];
    }

    function isLetter(key){
        let entry = key.toLowerCase();
        if(key === "a" || key === "b" || key === "c" || key === "d" || key === "e" || key === "f" ||  key === "g" ||  key === "h" || key === "i" || key === "j" || key === "k" ||  key === "l" ||  key === "m" || key === "n" || key === "o" || key === "p" ||  key === "q" || key === "r" || key === "s" || key === "t" || key === "u" || key === "v" || key === "w" ||  key === "x" || key === "y" || key === "z"){
            return true;
        }else{
            return false;
        }
    }



    generateBoxes();
}

export default WordleBack