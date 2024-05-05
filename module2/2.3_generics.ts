{   //generic type


    // const rollNumber: number[] = [1,2,3];
    const rollNumber : Array<number> = [1,2,3];

    // const student: string[] = ["x","y","z"];
    const student: Array<string> = ["x","y","z"]

    // const boolArray : boolean[] = [true, false, true]\
    const boolArray : Array<boolean> = [true, false, true]


    type GenericArray<T> = Array<T>

    const rollNumber2 : GenericArray<number>=[3,4,6];
    const student2: GenericArray<string> = ["x","y","z"];
    const boolArray2: GenericArray<boolean>=[true,false,true]

    const user : GenericArray<{name:string,age:number}> = [
        {
            name: "rakibul",
            age:24
        },
        {
            name:"asad",
            age:24
        },
    ]


    //generic tuple
    type GenericTuple<X,Y>=[X,Y]
    const users : GenericTuple<string,string> = ["rakibul","akash"]

    const UserWithID:GenericTuple<number,{name:string,email:string}> = [123,{name:"rakibul",email:"rakibul@gmail.com"}]

    


}