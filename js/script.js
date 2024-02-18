const firstButton = document.getElementById("button-1");
const secondButton = document.getElementById("button-2");
const thirdButton = document.getElementById("button-3");
const fourthButton = document.getElementById("button-4");
const fifthButton = document.getElementById("button-5");
const sixthButton = document.getElementById("finalButton");
const randomButton = document.getElementById("randomButton")
const firstWord = document.getElementById("firstWord");
const finalSentence = document.getElementById("finalSentence");
const randomSentence = document.getElementById("randomSentence");

const audioNoun1 = document.getElementById("audioNoun1");
const audioNoun2 = document.getElementById("audioNoun2");
const audioNoun3 = document.getElementById("audioNoun3");
const audioNoun4 = document.getElementById("audioNoun4");
const audioNoun5 = document.getElementById("audioNoun5");

const audioVerb1 = document.getElementById("audioVerb1");
const audioVerb2 = document.getElementById("audioVerb2");
const audioVerb3 = document.getElementById("audioVerb3");
const audioVerb4 = document.getElementById("audioVerb4");
const audioVerb5 = document.getElementById("audioVerb5");

const audioAdj1 = document.getElementById("audioAdj1");
const audioAdj2 = document.getElementById("audioAdj2");
const audioAdj3 = document.getElementById("audioAdj3");
const audioAdj4 = document.getElementById("audioAdj4");
const audioAdj5 = document.getElementById("audioAdj5");

const audioNoun2_1 = document.getElementById("audioNoun2_1");
const audioNoun2_2 = document.getElementById("audioNoun2_2");
const audioNoun2_3 = document.getElementById("audioNoun2_3");
const audioNoun2_4 = document.getElementById("audioNoun2_4");
const audioNoun2_5 = document.getElementById("audioNoun2_5");

const audioNoun3_1 = document.getElementById("audioNoun3_1");
const audioNoun3_2 = document.getElementById("audioNoun3_2");
const audioNoun3_3 = document.getElementById("audioNoun3_3");
const audioNoun3_4 = document.getElementById("audioNoun3_4");
const audioNoun3_5 = document.getElementById("audioNoun3_5");


let sentence1 = [audioNoun1, audioNoun2, audioNoun3, audioNoun4, audioNoun5];
let sentence2 = [audioVerb1, audioVerb2, audioVerb3, audioVerb4, audioVerb5];
let sentence3 = [audioAdj1, audioAdj2, audioAdj3, audioAdj4, audioAdj5];
let sentence4 = [audioNoun2_1, audioNoun2_2, audioNoun2_3, audioNoun2_4, audioNoun2_5];
let sentence5 = [audioNoun3_1, audioNoun3_2, audioNoun3_3, audioNoun3_4, audioNoun3_5];

let noun1 = ["The Sun", "Dog", "Thunder", "Snow", "The Rainbow"];
let verb = ["sets", "barks", "rumbles", "falls", "arcs"];
let adjective = ["peacefully", "loudly", "ominously", "slowly", "gracefully"];
let noun2 = ["behind", "in the quiet", "in the dark", "on the quiet town", "after the rain shower"];
let noun3 = ["distant mountains", "neighbourhood", "stormy sky", "in winter", "at school"];
let delay = 1000;


firstButton.addEventListener("click", changeFirstWord);

secondButton.addEventListener("click", changeSecondWord)

thirdButton.addEventListener("click", changeThirdWord)

fourthButton.addEventListener("click", changeFourthWord)

fifthButton.addEventListener("click", changeFifthWord)

sixthButton.addEventListener("click", printFinalSentence)

randomButton.addEventListener("click", function(){
    let random1 = Math.floor(Math.random() * 5);
    let random2 = Math.floor(Math.random() * 5);
    let random3 = Math.floor(Math.random() * 5);
    let random4 = Math.floor(Math.random() * 5);
    let random5 = Math.floor(Math.random() * 5);
    let randomSound = [sentence1[random1], sentence2[random2], sentence3[random3], sentence4[random4], sentence5[random5]];
    // console.log(noun1[random1] + ' ' + verb[random2] + ' ' + adjective[random3] + ' ' + noun2[random4] + ' ' + noun3[random5]);
    randomSentence.textContent = noun1[random1] + ' ' + verb[random2] + ' ' + adjective[random3] + ' ' + noun2[random4] + ' ' + noun3[random5];



    randomSound.forEach(function(audioElement, index) {
        setTimeout(function() {
            audioElement.play();
        }, index * delay);
    });
});

let firstNoun = 0;
let firstVerb = 0;
let firstAdj = 0;
let secondNoun = 0;
let thirdNoun = 0;

function changeFirstWord() {
    if (firstNoun === 5) {
        firstNoun = 0;
    }
    firstWord.textContent = noun1[firstNoun];
    sentence1[firstNoun].play();
    firstNoun++;
}

function changeSecondWord() {
    if (firstVerb === 5) {
        firstVerb = 0;
    }
    firstWord.textContent = verb[firstVerb];
    sentence2[firstVerb].play();
    firstVerb++;
}

function changeThirdWord() {
    if (firstAdj === 5) {
        firstAdj = 0;
    }
    firstWord.textContent = adjective[firstAdj];
    sentence3[firstAdj].play();
    firstAdj++;
}

function changeFourthWord() {
    if (secondNoun === 5) {
        secondNoun = 0;
    }
    firstWord.textContent = noun2[secondNoun];
    sentence4[secondNoun].play();
    secondNoun++;
}

function changeFifthWord() {
    if (thirdNoun === 5) {
        thirdNoun = 0;
    }
    firstWord.textContent = noun3[thirdNoun];
    sentence5[thirdNoun].play();
    thirdNoun++;
}

function printFinalSentence(){
    finalSentence.textContent = noun1[firstNoun-1] + " " + verb[firstVerb-1] + " " + adjective[firstAdj-1] + " " + noun2[secondNoun-1] + " " + noun3[thirdNoun-1];
    console.log(noun1[firstNoun] + ' ' + verb[firstVerb] + ' ' + adjective[firstAdj] + ' ' + noun2[secondNoun] + ' ' + noun3[thirdNoun]);

    let outputSound = [sentence1[firstNoun-1], sentence2[firstVerb-1], sentence3[firstAdj-1], sentence4[secondNoun-1], sentence5[thirdNoun-1]];


    outputSound.forEach(function(audioElement, index) {
        setTimeout(function() {
            audioElement.play();
        }, index * delay);
    });
}

