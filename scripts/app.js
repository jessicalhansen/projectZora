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
        - possibly add increment by 1 after 'playing' with cat.

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
                //   Buttons   //
///////////////////////////////////////////////////

// Start button
const startGameBtn = document.getElementById(`start-game-button`);

// Game control buttons
const foodBtn = document.getElementById('food-button');
const playBtn = document.getElementById('play-button');
const sleepBtn = document.getElementById('sleep-button');

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
           //   Stat functions   //
///////////////////////////////////////////////

function renderStats() {
    $(`#timer`).text(`Timer: ${timer}`);
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
        renderStats();

        // STOP TIMER WHEN STATS HIT 10
        if (newCat.hunger === 10 
            || newCat.boredom === 10 
            || newCat.sleepiness === 10) {
            clearInterval(counter);
            $(`#sprite`).attr(`src`, `/assets/madcat.png`);
        }
    }, 1000);
}

//  Increase stats every 10 seconds, except age.

function increaseStats() {
    if (timer % 10 === 0) {
        newCat.hunger++;
        newCat.boredom++;
        newCat.sleepiness++;

        renderStats();
    }
    // increase age every 20 seconds.
    if (timer % 30 === 0) {
        newCat.age++;
        renderStats();
    }
}

/////////////////////////////////////////////
           //  Create Sprite  //
/////////////////////////////////////////////

function createStartSprite() {
    const createSprite = $(`<img src="/assets/cat-standing-left.png" id="sprite">`);

    $(`.sprite`).append(createSprite);
};

/////////////////////////////////////////////
       //   Start button function   //
/////////////////////////////////////////////

function startClick() {
    startTimer();
    $(`#start-game-button`).remove();
    createStartSprite();
}

////////////////////////////////////////////
         //   Event Listeners   //
////////////////////////////////////////////

// Start Button Click
startGameBtn.addEventListener('click', startClick);