const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// an aray to store all user inputs.
let answers = [];

// nested callbacks a.k.a. callback hell a.k.a. callback waterfall.
rl.question('What\'s your name? Nicknames are also acceptable:) ', (name) => {
  console.log(`That is a wonderful name: ${name}`);
  answers.push(name);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`That is a wonderful name: ${activity}`);
    answers.push(activity); //sending input to answer array.

    rl.question('What do you listen to while doing that?', (music) => {
      console.log(`${music} is an interesting choice.`);
      answers.push(music);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        console.log(`We love ${meal} too.`);
        answers.push(meal);

        rl.question('What is your favorite thing to eat for that meal?', (meal_choice) => {
          console.log(`${meal_choice} sounds delicious,`);
          answers.push(meal_choice);

          rl.question('Which sport is your absolute favourite?', (sport) => {
            console.log(`what a great sport ${sport} is.`);
            answers.push(sport);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              console.log(`fantastic: ${superpower}`);
              answers.push(superpower);

              console.log(`${answers[0]}'s favorite activity is ${answers[1]} and their favorite music to isten to while ${answers[1]} is ${answers[2]}. ${answers[0]} loves their ${answers[3]} and their favorite meal at this time is ${answers[4]}. They love watching and playing ${answers[5]} and their superpower is ${answers[6]} `);

              // close app when all questions have been popilated
              rl.close(``);
            });
          });
        });
      });
    });
  });
});


  
