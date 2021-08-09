const add = (a:number, b:number) => {
  return a+b;
}
// Type inference only on return type

const subtraction = (a:number, b:number) => {
  a-b;
}
// Return type inferenced as void which is wrong in this case 

function division(a:number, b:number) {
  return a/b;
}

const multiply = function(a:number, b:number) {
  return a*b;
}

const logger = (msg:string):void => {
  console.log(msg);
}

const throwErr = (msg:string):never => {
  throw new Error(msg);
}

const throwNewErr = (msg:string):string => {
  if(!msg) {
    throw new Error(msg);
  }
  return msg;
}

const todaysWeather = {
  date: new Date(),
  weather: "cloudy",
}

const logWeather = (forecast:{date: Date; weather: String}):void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);