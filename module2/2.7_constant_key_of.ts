{


    type Vehicle = {
        bike:string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; // manually

    type Owner2 = keyof Vehicle

    const person1 : Owner ="car"


    
    const user = {
        name:"rakibul",
        age: 26,
        address:"rajbari"
    }

    const getPropertyValue = <X,Y extends keyof X>(obj: X, key:Y)=>{
        return obj[key];
    }
    const user1 = getPropertyValue(user,"name")


}