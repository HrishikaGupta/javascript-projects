let gameWords = ["commerce", "Biology", "Mathematics", "English", "Sociology", "Curiosity","hindi","games","Physics","Chemistry"];
var selectedWord, updatedWord;
var counter=0;

//The following function is used to scrabble of jumble any word.
const scarbbleWords = (word) => {
    let arrayOfWord = word.split("")
    for (var i = 0; i < arrayOfWord.length; i++) {
        var j = Math.floor(Math.random() * (arrayOfWord.length));
        let temp = arrayOfWord[i];
        arrayOfWord[i] = arrayOfWord[j];
        arrayOfWord[j] = temp;
        updatedWord = arrayOfWord.join("");
        document.getElementById("questionWord").innerHTML = updatedWord;
    }
}

//The following function is used to check whether the word type by user is same as the correct word
const checkfunc = () => {
    var answer = document.getElementById("inputFromUser").value;
    document.getElementById("inputFromUser").value="";   
    if (answer === selectedWord) {
        alert("Correct");
        counter+=1;
        scrabbleArray(gameWords);
    }
    else{
        alert("Incorrect, you can try again")
    }
}

//The following function is used to pick any random word from the array
const scrabbleArray = (arr) => {
    if(arr.length==0){
        alert(`GAME OVER. YOUR SCORE IS ${counter} out of ${arr.length}`);

    }
    document.getElementById("inputFromUser").removeAttribute("hidden");
    document.getElementById("mainbtn").innerText = "NEXT WORD";
    var j = Math.floor(Math.random() * (arr.length));
    selectedWord = arr[j].toLowerCase();
    arr.splice(j, 1);
    scarbbleWords(selectedWord)

}


document.getElementById('mainbtn').addEventListener('click', function () {
    scrabbleArray(gameWords);
})

document.getElementById('check').addEventListener('click',checkfunc);
