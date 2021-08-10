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