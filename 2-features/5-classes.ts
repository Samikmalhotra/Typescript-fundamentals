class Vehicles {
  // public drive():void{
  //   console.log('vroom vroom')
  // }
  // color: string;;

  constructor(public color: string){
    // this.color = color;
  }

  protected honk():void{
    console.log('beep')
  }
}

const vehicle = new Vehicles('Orange');
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicles {

  constructor(public wheels: number, color: string){
    super(color);
  }

  private drive():void{
    console.log('vroom');
  }
  startDrivingProcess():void{
    this.drive();
    this.honk();
  }
}

const car = new Car(4,'Blue');
car.startDrivingProcess();
// car.honk();