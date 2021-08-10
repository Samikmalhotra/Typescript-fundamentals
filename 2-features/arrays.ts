const carMakers = ['ford', 'toyota', 'honda']

const carMaker:string[] = []

const dates = [new Date(), new Date()]

const carsByMake = [
  ['f150'],
  ['corollaa'],
  ['camaro']
]

//  Help with inference when extracting values

const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values, following is an error
carMakers.push(100);

// Help with map
carMakers.map((car:string):string => {
  return car;
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const newDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// following is an error
importantDates.push(100);
