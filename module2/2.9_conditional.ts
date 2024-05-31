{
    //conditional type


    type a1 = number;
    type b1 = string;


    type x = a1 extends null ? true : false;

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;



    type Vehicle = {
        bike: string;
        car: string;
        ship:string;
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
    // type hasBike = CheckVehicle<"ship">

    type CheckVehicle<T> = T extends keyof Vehicle ? true : false;
    type hasBike = CheckVehicle<"bike">




}