const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let info = {};
rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  info.name = answer;
  rl.question(`What's an activity you like doing?`, (answer) => {
    info.activity = answer;
    rl.question(`What do you listen to while doing that?`, (answer) => {
      info.music = answer;
      rl.question(`Which meal is your favourite(eg: dinner, brunch, etc.)`, (answer) => {
        info.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          info.foodForMeal = answer;
          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            info.sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
              info.superpower = answer;
              console.log(`${info.name} loves listening to ${info.music} while ${info.activity}, devouring ${info.foodForMeal} for ${info.meal}, prefers ${info.sport} over any other sport, and is amazing at ${info.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});