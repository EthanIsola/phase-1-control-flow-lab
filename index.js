function scuberGreetingForFeet(length){
  // Write your code here!
  if(length <= 400){
    return 'This one is on me!';
  }
  else if(length > 2000 && length < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(length > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let cityCheck;
  city == 'NYC' ? (cityCheck = "Ok, sounds good.") : (cityCheck = "No go.");  
  return cityCheck;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}