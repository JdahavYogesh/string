var Game_Winner = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let letter of S) {
      if (letter === "A") {
        countOfA++;
      } else {
        countOfD++;
      }
    }
  
    if (countOfA > countOfD) {
      return "Aditya";
    } else if (countOfA < countOfD) {
      return "Danish";
    } else {
      return "Draw";
    }
  };
  
  console.log(Game_Winner("ADDAAADDDDD"));