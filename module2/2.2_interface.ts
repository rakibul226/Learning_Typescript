{
    //--------type alias
    type User1 = {
        name: string;
        age: number;
    };

    type UserWithRole1 = User1 & {role : string}

    const user1: UserWithRole1 = {
        name: "rakibul",
        age: 100,
        role: "student",
    }



    //--------interface
    interface User2{
        name: string;
        age:number;
    }

    const user: User2 = {
        name: "rakibul",
        age: 100
    }

    // interface UserWithRole2 extends User1 {  //we can also use type as interface using extend keyword
    interface UserWithRole2 extends User2 {
        role : string
    }

    const user2 : UserWithRole2 ={
        name: "rakibul",
        age: 100,
        role:"student"
    }



    //------------------------

    type Roll1 = number[];
    const rollNumber: Roll1 = [1,2,3]


    interface Roll2 {
        [index : number] : number
    }
    const rollNumber2 : Roll2 = [4,5,6]


    //------------------------
    type Add = (num1:number, num2:number)=> number
    const add : Add = ( num1 ,num2 ) => num1 + num2;

    interface Add2 {
        (num1:number, num2:number) : number
    }
    const Add2 : Add2 =( num1 ,num2 )=> num1+num2;







}