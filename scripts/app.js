console.log('Project Zero');
/*              Project Zero: projectZora
                Pseudo code MVP rough draft

1. Create a Tamagotchi class - cat
    - Name - default Zora
    - Hunger: 0
    - Sleepiness: 0
    - Boredom: 0
    - Age: 0

2. Create a stats display and assign methods
    - Timer 
    - Hunger: 0 --> 10 - increment by 1 every 10 seconds 
        - possibly add increment by 1 after 'playing' with cat.

    - Sleepiness: 0 --> 10 - increment every 10 seconds 
        - possibly add increment by 1 after 'feeding' cat.

    - Boredom: 0 --> 10 - increment by 1 every 10 seconds
       - possibly add increment by 1 after making cat 'sleep'. 

    - Age: 0 - possibly increment by 1 every 30 seconds. 


3. Create button bar and assign methods (icons in /assets/)
    - Feed --> resets hunger to 0 - animate cat happy icon
        - possibly animate fish on screen

    - Play --> resets boredom to 0 - animate cat sitting icon
        - possibly animate ball of yarn on screen

    - Sleep --> resets sleepiness to 0 - turn screen black with cat sleeping icon in middle of screen
        - possibly animate 'zzz'

4. Add start screen - click any button to start.
    - cat standing icon animation
    - possibly include 'adoption' dialogue. 

5. GAME OVER - when any stat hits 10
    - Zora runs away, animiate angry cat icon
    - except age.
        
*/



///////////////////////////////////////////////////
             //   Game Objects   //
///////////////////////////////////////////////////

class Cat {
    constructor(name=`Zora`) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }
}

const newCat = new Cat;
// may add ability to create additional cats in future.

///////////////////////////////////////////////
        //   Sound Effects   //
///////////////////////////////////////////////

const shortMeow = new Audio(`/assets/cat-meow-short.wav`);
const excitedPurr = new Audio(`/assets/excitedpurr.wav`);
const pouringCatFood = new Audio(`/assets/pouring-catfood.wav`);
const catGrowls = new Audio(`/assets/catgrowls.wav`);

///////////////////////////////////////////////
           //   Stat functions   //
///////////////////////////////////////////////

function renderStats() {
    // $(`#timer`).text(`Timer: ${timer}`);
    $(`#age`).text(`Age: ${newCat.age}`);
    $(`#hunger`).text(`Hunger: ${newCat.hunger}`);
    $(`#boredom`).text(`Boredom: ${newCat.boredom}`);
    $(`#sleepiness`).text(`Sleepiness: ${newCat.sleepiness}`);
};

//////////////////////////////////////////////
           //   Game timers   //
/////////////////////////////////////////////

let timer = 0;

function startTimer() {
    const counter = setInterval(function() {
        timer++;
        increaseStats();

        // STOP TIMER WHEN STATS HIT 10
        if (newCat.hunger === 10 
            || newCat.boredom === 10 
            || newCat.sleepiness === 10) {
            clearInterval(counter);
            
            runAway();
        }
    }, 1000); 
    renderStats();
}

//  Increase stats every 10 seconds, except age.

function increaseStats() {
    if (timer % 10 === 0) {
        newCat.hunger++;
        newCat.boredom++;
        newCat.sleepiness++;

        shortMeow.play();

        renderStats();
    }
    // increase age every 20 seconds.
    if (timer % 30 === 0) {
        newCat.age++;
        renderStats();
    }
}

/////////////////////////////////////////////
        //   Control button functions  //
/////////////////////////////////////////////

function foodTime() {
    $(`.sprite`).attr(`id`, `sprite-food`);
    $(`.game-area-night`).attr(`class`, `game-area`);

    if (newCat.hunger > 0) {
        newCat.hunger = 0;

        populateFood();

        pouringCatFood.play();

        newCat.sleepiness++;

        setTimeout(function() {
            $(`.sprite`).attr(`id`, `sprite`);
            $(`.food`).remove();
        }, 2000);

        renderStats();
    } 
    // else $(`.sprite`).attr(`id`, `sprite`);
}

// Play control button
function playTime() {
    $(`.sprite`).attr(`id`, `sprite-play`);
    $(`.game-area-night`).attr(`class`, `game-area`);

    if (newCat.boredom > 0) {
        newCat.boredom = 0;

        populateToy();

        excitedPurr.play();

        newCat.hunger++;

        setTimeout(function() {
            $(`.sprite`).attr(`id`, `sprite`);
            $(`.toy`).remove();
        }, 2000);

        renderStats();
    }
    else $(`.sprite`).attr(`id`, `sprite`);
}

// Sleep control button
function sleepTime() {
    $(`.sprite`).attr(`id`, `sprite-sleep`);
    $(`.game-area`).attr(`class`, `game-area-night`);
    

    if (newCat.sleepiness > 0) {
        newCat.sleepiness = 0;

        populateClouds();

        newCat.boredom++;

        setTimeout(function() {
            $(`.sprite`).attr(`id`, `sprite`);
            $(`.game-area-night`).attr(`class`, `game-area`); 
            $(`.zzz`).remove();
        }, 2000);

        renderStats();
    }
    else $(`.sprite`).attr(`id`, `sprite`)
    && $(`.game-area-night`).attr(`class`, `game-area`); 
}

/////////////////////////////////////////////
           //   Random toy  //
/////////////////////////////////////////////

function getRandomToy() {

    const toyList = ["mouse", "feather", "yarn", "fish",];

    const randomNumber = Math.floor(Math.random() * 4);

    return toyList[randomNumber];
}

function populateToy() {
    const sendToy = $(`<div class="toy ${getRandomToy()}" />`);

    $(`.sprite-area`).prepend(sendToy);
}

/////////////////////////////////////////////
         //  Populate food  //
/////////////////////////////////////////////

function populateFood() {
    const sendFood = $(`<div class="food" />`);

    $(`.sprite-area`).prepend(sendFood);
}

/////////////////////////////////////////////
        //  Populate dreamclouds  //
/////////////////////////////////////////////

function populateClouds() {
    const sendZ = $(`<div class="zzz" />`);

    $(`.game-text-area`).append(sendZ);
}

/////////////////////////////////////////////
           //  Create Sprite  //
/////////////////////////////////////////////

function createStartSprite() {
    $(`.sprite`).attr(`id`, `sprite`);
}

/////////////////////////////////////////////
       //   Create game controls   //
/////////////////////////////////////////////

// function createGameControls() {
//     // Food button
//     const createFoodBtn = $(`<button id="food-button">
//     <img src="/assets/cat-food.png" alt="Feed me!" class="food-icon">
//     </button>`);

//     // Play button
//     const createPlayBtn = $(`<button id="play-button">
//     <img src="/assets/play-icon.png" alt="Play time!" class="play-icon">
//     </button>`);

//     // Sleep button
//     const createSleepBtn = $(`<button id="sleep-button">
//     <img src="/assets/sleep.png" alt="Sleep time!" class="sleep-icon">
//     </button>`);

//     $(`.game-controls`).append(createFoodBtn, createPlayBtn, createSleepBtn);
// }

/////////////////////////////////////////////
       //   Start button function   //
/////////////////////////////////////////////

function startClick() {
    startTimer();
    $(`#start-game-button`).remove();
    createStartSprite();
    shortMeow.play();
}

/////////////////////////////////////////////
        //   Runaway function   //
/////////////////////////////////////////////

function runAway() {
    $(`.sprite`).attr(`id`, `sprite-angry`);
        $(`.game-area-night`).attr(`class`, `game-area`);
        $(`#food-button`).remove();
        $(`#play-button`).remove();
        $(`#sleep-button`).remove();
        catGrowls.play();

        const runawayMessage = $(`<p class="ingame-text">
        <span id="game-over">GAME OVER: </span>
        Your lack of care and love made ${newCat.name} run away!</p>`);
        $(`.game-controls`).append(runawayMessage);
}

///////////////////////////////////////////////////
           //   Button Selectors  //
///////////////////////////////////////////////////

// Start button
const startGameBtn = document.getElementById(`start-game-button`);

// Game control buttons
const foodBtn = document.getElementById('food-button');
const playBtn = document.getElementById('play-button');
const sleepBtn = document.getElementById('sleep-button');

////////////////////////////////////////////
         //   Event Listeners   //
////////////////////////////////////////////

// Start Button Click
startGameBtn.addEventListener('click', startClick);

// Food control button
foodBtn.addEventListener(`click`, foodTime);

// Play control button
playBtn.addEventListener(`click`, playTime);

// Sleep control button
sleepBtn.addEventListener(`click`, sleepTime);


