let day = 'Tuesday'; //Insert the day of week
day = day.toLowerCase();

//If you have to sleep more, insert here the ammount:
specialIdealHours = null
let hours;

function getSleepDay(day){ //Hours slept in the week
  switch(day){
    case 'monday':
    hours = 7
    return hours
    break;
    case 'tuesday':
    hours = 5
    return hours
    break;
    case 'wednesday':
    hours = 6
    return hours
    break;
    case 'thursday':
    hours = 7
    return hours
    break;
    case 'friday':
    hours = 9
    return hours
    break;
    case 'saturday':
    hours = 12
    return hours
    break;
    case 'sunday':
    hours = 5
    return hours
    break;
  }
}

function getSleepHours(){ //Sum of all hours
 let sumHours = 
  getSleepDay('monday')
  + getSleepDay('tuesday')
  + getSleepDay('wednesday')
  + getSleepDay('thursday')
  + getSleepDay('friday')
  + getSleepDay('saturday')
  + getSleepDay('sunday');
 return sumHours;
  
}

function getIdealHours(){ //The ideal hours you need to sleep
  if(specialIdealHours){
    let idealHoursDay = specialIdealHours
    return idealHoursDay * 7 //7 days of the week
  }else{
    let idealHoursDay = 8
    return idealHoursDay * 7 //7 days of the week
  }
  
}

function sleepDebitCount(){ //SleepDebit calculator
  let sleepHours = getSleepHours();
  let idealHours = getIdealHours();
  console.log('Your sleep summary: ')
  if(sleepHours == idealHours){
    console.log('Sleep hours: ' + sleepHours + '\nYou got the perfect amount of sleep hours');

  }else if(sleepHours > idealHours){
    console.log(`Over hours: ${sleepHours - idealHours}\nOh, you sleep more than necessary this week`);

  }else{
    console.log(`Debit of sleep hours: ${idealHours - sleepHours}\nYou need to sleep more, get some rest`);
  }
  }



sleepDebitCount();
