<?php

    require_once("Account.php");
    require_once("Car.php");
    require_once("uberX.php");
    require_once("uberPool.php");

    $uberX = new uberX("CVB123", new Account("Andres Herrera", "AND123"), "Chevrolet", "Spark");
    $uberX->printDataCar();

    $uberPool = new UberPool("TYU567", new Account("Andrea Ferran", "AND765"), "Dodge", "Attitud");
    $uberPool->printDataCar();
    // $car = new Car("AMQ123", new Account("Andres Herrera", "AND123"));
    // $car -> printDataCar();

?>