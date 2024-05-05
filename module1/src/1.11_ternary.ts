{
    //Ternary operator , Optional chaining, Nullish coalescing operator

    const age: number = 1;

    // if(age >=18){
    //     console.log("adult");
    // }
    // else{
    //     console.log("not adult");
    // }

    // //ternary operator
        const isAdult = age >= 18 ? "adult" : "not adult";
        console.log({isAdult});
    

    //nullish coalescing operator
        const isAuthenticated = undefined ;
        // const isAuthenticated = null ;

        const result1 = isAuthenticated ?? "Guest";
        const result2 = isAuthenticated ? isAuthenticated : "Guest";
        console.log({result1},{result2});
    

        type Student = {  
            name:string;
            age:number;
            contactNo?:string;
            gender:string;
            address:{
                city:string;
                road:string;
                presentAdd:string;
                permanentADD?:string;
            }
        }
    
        const student: Student = {
            name:"rakibul",
            age:24,
            contactNo:"01779048226",
            gender:"male",
            address:{
                city:"rajbari",
                road:"5A",
                presentAdd:"dhaka",            
            }
        }

        const permanentADD = student?.address?.permanentADD ?? "No permanent address";
        console.log({permanentADD});
        


}