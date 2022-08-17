var Palin_Check = (str) => {
    let reversedString = "";
    for (let i = str.length-1; i >= 0; i--) {
      reversedString += str[i];
    }
  
    if (str === reversedString) {
      return "True";
    } else {
      return "False";
    }
  };
  
  console.log(Palin_Check("naman"));