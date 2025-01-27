export class Car {
  private readonly motor = new Motor();
  start(): void {
    this.motor.start();
  }
  accelerate(): void {
    this.motor.accelerate();
  }
  stop(): void {
    this.motor.stop();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
}

export class Motor {
  start(): void {
    console.log('motor started');
  }
  accelerate(): void {
    console.log('motor accelerated');
  }
  stop(): void {
    console.log('motor stopped');
  }
  turnOff(): void {
    console.log('motor turned off');
  }
}

const car = new Car();

car.start();
car.accelerate();
car.stop();
car.turnOff();
