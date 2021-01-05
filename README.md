# project-zero
<h2>Welcome to projectZora!</h2>

<h3>Link to game:</h3>
https://jessicalhansen.github.io/projectZora/

<h3>User Story:</h3>
<p>Congratulations!
        
   You were lucky enough to find a beautiful blue kitten at the local animal shelter! 
   Now it's time to welcome Zora home!
        
   Click on the "Start!" button to begin play!

   The three main buttons control the gameplay by allowing you to:
   feed Zora to reset her hunger level,
   play with Zora to reset her boredom level,
   and make Zora rest to reset her sleepiness.

   Zora's hunger, boredom, and sleepiness stats all increment by 1 every 10 seconds. You will hear an alert from Zora every time they go up. Zora's hunger will also go up by 1 every time you play with her, along with boredom every time you make Zora rest, and her sleepiness will go up by 1 every time you feed Zora. 
            
   Be sure to avoid reaching 10 in any stat, or Zora will become very upset and run away! 
       

   See how long you can take care of her!
   </p>

<h3>Pseudo code:</h3>

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
    
<h3>Wireframe:</h3>

![wireframe](https://media.git.generalassemb.ly/user/32534/files/1f684780-4e75-11eb-9c52-e6f4a63e2526)


<h3>Challenges:</h3>

I spent a lot of time trying to figure out how to center the "Start!" button, not realizing that the reason I was encountering issues was due to having the desired background image as an <img> tag instead of a background-image in CSS. Once I figured out that error, I was able to successfully center the button with a little additional effort. 

I also encountered a lot of issues with getting animations to work on the page, and I intended to have the sprite walk across the screen. I still have been unsuccessful in making the animation work, and that may be in part to the way I attached the sprite images in CSS using content: url(). I tried using animate in CSS using @keyframes, as well as trying to animate using jQuery.animate().


Thanks for looking!