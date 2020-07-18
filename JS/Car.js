
// function Car(license, driver) {
//     this.id;
//     this.license = license;
//     this.driver = driver;
//     this.passegenger;
// }

// Car.prototype.prinDataCar = function () {
//     console.log(this.driver)
//     console.log(this.driver.name)
//     console.log(this.driver.document)
// }

// A partir de las nuevas especificaciones del EcmaScript 6 ya podemos declarar 
// una clase con la palabra reservada class

class Car{

    constructor(license, driver){
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }

    printDataCar = function(){
        console.log(this.driver)
        console.log(this.driver.name)
        console.log(this.driver.document)
    }
}