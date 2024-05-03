{
    //Type alias

    // const student1:{
    //     name:string;
    //     age:number,
    //     contactNo:string,
    //     gender:string,
    //     address:string;
    // } = {
    //     name:"rakibul",
    //     age:24,
    //     contactNo:"01779048226",
    //     gender:"male",
    //     address:"rajbari"
    // }

    // const student2:{
    //     name:string;
    //     age:number,
    //     contactNo:string,
    //     gender:string,
    //     address:string;
    // } = {
    //     name:"asad",
    //     age:24,
    //     contactNo:"0173141431",
    //     gender:"male",
    //     address:"rajbari"
    // }


    type Student = {  //whenever we declare a type the name Should start with a capital chart
        name:string;
        age:number;
        contactNo?:string;
        gender:string;
        address:string;
    }

    const student1: Student = {
        name:"rakibul",
        age:24,
        contactNo:"01779048226",
        gender:"male",
        address:"rajbari"
    }

    const student2: Student = {
        name:"asad",
        age:24,
        contactNo:"0170000000",
        gender:"male",
        address:"rajbari"
    }




    type UserName = string;
    const userName : UserName = 'Rakibul';

    type IsStudent = boolean;
    const isStudent : IsStudent = true;

    type IsNumber = number;
    const phone : IsNumber = 98212323

    type Add = (num1:number,num2:number)=> number;
    const add: Add = (num1, num2) => num1+num2;
}