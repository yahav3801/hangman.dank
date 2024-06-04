const DishesArr = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Tacos",
    "Lasagna",
    "Salmon",
    "Steak",
    "Ramen",
    "Curry",
    "Salad",
    "Chili",
    "Risotto",
    "Falafel",
    "Empanada",
    "Cake",
    "Donut",
    "Pancake",
    "Shawarma",
    "Waffles",
    "Kebab",
    "Tortilla",
    "Pudding",
    "Hummus",
    "Omelette"
  ];
  const CitiesArr = [
    "Mykonos",
    "Tokyo",
    "London",
    "Paris",
    "Madrid",
    "Beijing",
    "Moscow",
    "Dubai",
    "Chicago",
    "Athens",
    "Shanghai",
    "Singapore",
    "Washington",
    "Sydney",
    "Istanbul",
    "Berlin",
    "Rome",
    "Seoul",
    "Toronto",
    "Mumbai",
    "Haifa",
    "Bangkok",
    "Amsterdam",
    "Barcelona",
    "Jerusalem"
  ];
  const AnimalsArr = [
    "Dog",
    "Cat",
    "Elephant",
    "Lion",
    "Tiger",
    "Bear",
    "Giraffe",
    "Monkey",
    "Horse",
    "Bird",
    "Dolphin",
    "Whale",
    "Penguin",
    "Kangaroo",
    "Snake",
    "Wolf",
    "Fox",
    "Rabbit",
    "Deer",
    "Panda",
    "Squirrel",
    "Zebra",
    "Cheetah",
    "Gorilla",
    "Eagle"
  ];
  

  let subjectBtn = document.querySelector('.options-container');
  let keyBoard = document.querySelector('.keyBoard-container');
  let wordContainer = document.querySelector('.word-container');
  let drawContainer = document.querySelector('.draw-container');
  let gallowImg = document.querySelector('.gallow');
  let winVid = document.querySelector('#winVid');
  let audioSad = new Audio('mlg-sad-violin-short.mp3');
  let audioPog = new Audio('swaggityswagger.mp3');
  let audioWow = new Audio('wow-mlg-sound-effect.mp3');
  let audioNope = new Audio('engineer_no01.mp3');
  let subject;
  let answer;
  let answerPlaceholder = [];

  subjectBtn.addEventListener('click', (e)=>{
    if (e.target.innerText === 'Cities') {
      answer = CitiesArr[Math.floor(Math.random()*CitiesArr.length)].toLowerCase()
      console.log(answer);
      subjectBtn.classList.add('hide')
      keyBoard.classList.remove('hide')
      for (let i = 0; i < answer.length; i++) {
         answerPlaceholder.push('_')
        }
        console.log(answerPlaceholder);
        wordContainer.innerText=answerPlaceholder.join(' ')
      checkLetter(answer)
    } else
    if (e.target.innerText === 'Animals') {
      answer = AnimalsArr[Math.floor(Math.random()*AnimalsArr.length)].toLowerCase();
      console.log(answer);
      subjectBtn.classList.add('hide')
      keyBoard.classList.remove('hide')
      for (let i = 0; i < answer.length; i++) {
        answerPlaceholder.push('_')
       }
       console.log(answerPlaceholder);
       wordContainer.innerText=answerPlaceholder.join(' ')
      checkLetter(answer)
    } else
    if (e.target.innerText === 'Dishes') {
      answer = DishesArr[Math.floor(Math.random()*DishesArr.length)].toLowerCase();
      console.log(answer);
      subjectBtn.classList.add('hide')
      keyBoard.classList.remove('hide')
     for (let i = 0; i < answer.length; i++) {
         answerPlaceholder.push('_')
        }
        console.log(answerPlaceholder);
        wordContainer.innerText=answerPlaceholder.join(' ')
      checkLetter(answer)
    } 
  })
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let attempts=0
  function checkLetter() {
    alphabet.forEach((letter)=>{
      const letterBtn = document.createElement('button');
      letterBtn.innerText=letter;
      letterBtn.classList.add('button')

      letterBtn.addEventListener('click',()=>{
        console.log('press');

        letterBtn.setAttribute('disabled', true);
        document.letterBtn = null;
        
        for (let i = 0; i < answer.length; i++) {
          if (answer[i]===letter) {
            audioWow.play()
            letterBtn.style.background='green'
            answerPlaceholder[i]=letter
            wordContainer.innerText=answerPlaceholder.join(' ')
          } 
        }
          if (answerPlaceholder.join('').toString()===answer) {
            audioPog.play()
            keyBoard.classList.add('alert')
            winVid.classList.remove('hide')
          keyBoard.innerHTML=`You won! 🥳 wanna try again?`
          const resetBtn = document.createElement("button");
          resetBtn.classList.add('resetBtn')
          resetBtn.addEventListener('click',()=>{location.reload()})
          resetBtn.innerText = "Try again!";
          keyBoard.appendChild(resetBtn);
          } 

        if (answer.indexOf(letter) === -1) {
          audioNope.play()
          letterBtn.style.background='red'
          attempts++
          console.log(attempts);
          gallowImg.src = `${attempts}.png`
        }
        if (attempts===6) {
          audioSad.play()
          keyBoard.classList.add('alert')
          keyBoard.innerHTML=`You lost 😢 the word was: ${answer}`
          const resetBtn = document.createElement("button");
          resetBtn.classList.add('resetBtn')
          resetBtn.addEventListener('click',()=>{location.reload()})
          resetBtn.innerText = "Try again!";
          keyBoard.appendChild(resetBtn);
        }
      })

      keyBoard.appendChild(letterBtn);

    })
    
  }
