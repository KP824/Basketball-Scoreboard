/* Goal here is to create functionality with adding additonal points the the score board.
 We'll probably want a resent button as well. 
 We need to create variables for the home-score, guest score, and all of the score buttons
*/

// variable for home score board
let homeScoreVal = 0;
const homeScore = document.querySelector(".home-score");
// const homePlusOne = document.getElementById("home-one-point");
// const homePlusTwo = document.getElementById("home-two-point");
// const homePlusThree = document.getElementById("home-three-point");

// variables for guest score board
let guestScoreVal = 0;
const guestScore = document.querySelector(".guest-score");
// const guestPlusOne = document.getElementById("guest-one-point");
// const guestPlusTwo = document.getElementById("guest-two-point");
// const guestPlusThree = document.getElementById("guest-three-point");

/* variables for home/guest team class (used for highting leader) */
const homeTeam = document.querySelector(".home-team");
const guestTeam = document.querySelector(".guest-team");

// declare and assign home teams buttons
const homeOne = document.getElementById("home-one-point");
const homeTwo = document.getElementById("home-two-point");
const homeThree = document.getElementById("home-three-point");

// declare and assign guest teams buttons
const guestOne = document.getElementById("guest-one-point");
const guestTwo = document.getElementById("guest-two-point");
const guestThree = document.getElementById("guest-three-point");

// create functions that add the correct number of points for each button
function homeAddOne() {
  homeScoreVal++;
  homeScore.textContent = homeScoreVal;
}

function homeAddTwo() {
  homeScoreVal += 2;
  homeScore.textContent = homeScoreVal;
}

function homeAddThree() {
  homeScoreVal += 3;
  homeScore.textContent = homeScoreVal;
}

function guestAddOne() {
  guestScoreVal++;
  guestScore.textContent = guestScoreVal;
}

function guestAddTwo() {
  guestScoreVal += 2;
  guestScore.textContent = guestScoreVal;
}

function guestAddThree() {
  guestScoreVal += 3;
  guestScore.textContent = guestScoreVal;
}

// create two functions to reset the scores of the home & guest

function resetHome() {
  homeScoreVal = 0;
  homeScore.textContent = homeScoreVal;
  homeTeam.classList.remove("active");
  //console.log(`this is homeScore: ${homeScore.innerContext}`);
}

function resetGuest() {
  guestScoreVal = 0;
  guestScore.textContent = guestScoreVal;
  guestTeam.classList.remove("active");
  //console.log(`this is guest score: ${guestScore.innerContext}`);
}

// "new game" button, reassigns both scores to 0. Assigns their elements to the variable, then removes "active" class list from both.
function newGame() {
  homeScoreVal = 0;
  homeScore.textContent = homeScoreVal;
  homeTeam.classList.remove("active");

  guestScoreVal = 0;
  guestScore.textContent = guestScoreVal;
  guestTeam.classList.remove("active");
}

// functionality for highlighting the leader
// apply event listener to their respective buttons, and invoke the correct function per button.
// apply conditional statement to compare the home/guest scores then append/remove the "active" class phrase to their respective classes
homeOne.addEventListener("click", () => {
  homeAddOne();

  // console.log(`this is homeScore: ${homeScore.textContent}`);
  // console.log(`this is guestScore: ${guestScore.textContent}`);
  // console.log(+homeScore.innerHTML > +guestScore.innerHTML);
  if (+homeScore.innerHTML > +guestScore.innerHTML) {
    homeTeam.classList.add("active");
    guestTeam.classList.remove("active");
  }
});

homeTwo.addEventListener("click", () => {
  homeAddTwo();

  if (+homeScore.textContent > +guestScore.textContent) {
    homeTeam.classList.add("active");
    guestTeam.classList.remove("active");
  }
});

homeThree.addEventListener("click", () => {
  homeAddThree();

  if (+homeScore.textContent > +guestScore.textContent) {
    homeTeam.classList.add("active");
    guestTeam.classList.remove("active");
  }
});

// console.log(`this is homeThree: ${homeThree}`);

// let test = document.querySelector(".btns-points");
// console.log(`this is the btns div: ${test}`);

guestOne.addEventListener("click", () => {
  guestAddOne();

  if (+guestScore.textContent > +homeScore.textContent) {
    guestTeam.classList.add("active");
    homeTeam.classList.remove("active");
  }
});

guestTwo.addEventListener("click", () => {
  guestAddTwo();

  if (+guestScore.textContent > +homeScore.textContent) {
    guestTeam.classList.add("active");
    homeTeam.classList.remove("active");
  }
});

guestThree.addEventListener("click", () => {
  guestAddThree();

  if (+guestScore.textContent > +homeScore.textContent) {
    guestTeam.classList.add("active");
    homeTeam.classList.remove("active");
  }
});

/* Stretch Goals from the project:
a) Add a "New Game" button:
    Approach: Similar to the reset buttons we created but will reset both of the values. Can just copy the reset buttons and rename it "new game"
b) highlight the leader:
    Approach: - We create an "active" css rule for each of the team containers. Reverse the colors to highlight who has the higher score. 
    * Had to adjust original HTML. Create individual div's for each team
    * Had to remove the "onclick" attributes and make variables for each of those classes.
    * Need to apply event listeners to each of those variables 
    * Then add the add/remove conditional, depending on who has the higher score
    - add a transition: bg-color property to the original containers



c) Add a few more counters (period: fouls, timer);  <--- will come back to the counter 12/5/2022
d) Change the design

*/
