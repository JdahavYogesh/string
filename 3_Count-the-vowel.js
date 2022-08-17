var Count_Vowels = (S) => {
    let vowels = "aeiou";
    let count = 0;
    for (letter of vowels) {
      for (character of S) {
        if (letter === character) {
          count++;
        }
      }
    }
    return count;
  };
  
  console.log(Count_Vowels("prepbytes"));