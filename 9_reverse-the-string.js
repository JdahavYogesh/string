var Reverse_String = (str) => {
    let reverseString = "";
    let length = str.length;
  
    while (length > 0) {
      reverseString += str[length - 1];
      length--;
    }
  
    return reverseString;
  };
  
  Reverse_String("I am utkarsh raj");