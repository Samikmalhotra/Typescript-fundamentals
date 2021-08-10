interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return this.name + ' is broken';
  }
};

const printVehicle = (vehicle: Vehicle):void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
}

printVehicle(oldCivic);

// Make interfaces reusable