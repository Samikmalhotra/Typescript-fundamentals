class Vehicles {
  drive():void{
    console.log('vroom vroom')
  }
  honk():void{
    console.log('beep')
  }
}

const vehicle = new Vehicles();
vehicle.drive();
vehicle.honk();

class Car extends Vehicles {
  drive():void{
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();