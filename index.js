let ride;
function scuberGreetingForFeet(ride){
  if (ride < 400) {
    return "This one is on me!";
  }
  else if (ride <= 2000 && ride >= 400){
    return "That will be twenty bucks.";
  }
  else if (ride <= 2500 && ride >= 2000){
    return "I will gladly take your thirty bucks.";
  }
  else if (ride > 2500){
    return "No can do.";
  }
}

let city;
function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good.";
  }
  else (city != "NYC"); {
    return "No go.";
  }
}

let tip;
function switchOnCharmFromTip(tip){
  switch(tip) {
    case tip = "generous":
      return "Thank you so much.";
      break;
    case tip = "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }  
}
