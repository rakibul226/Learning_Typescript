{

    const createArray = ( param : string ) : string[]=>{
        return [param]
    }
    const res1 = createArray("Bangladesh")




    const arrayWithGeneric = <T>(param: T): T[] =>{
        return [param];
    }

    type User = { id:number; name:string }
    const resGeneric = arrayWithGeneric<string>("Bangladesh")

    // const resGenObject = arrayWithGeneric<{ id:number; name:string }>({id:226,name:"rakibul"})
       const resGenObject = arrayWithGeneric<User>({id:226,name:"rakibul"})




    const createArrayWithTuple = <T,Q>(param1:T, param2:Q): [T,Q]=>{
        return [param1,param2]
    }

    const res2 = createArrayWithTuple<string, number>("Bangladesh",2024);

    const res3 = createArrayWithTuple<string,{name:string}>("Bangladesh",{name:'asia'})


    const addCourseToStudent =<T>( student : T )=>{
        const course = "next dev"
        
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:"Mr X",email:"x@gmail.com",devType:"fronted"})
    const student2 = addCourseToStudent({name:"Mr X",email:"x@gmail.com",hasWatch:"Apple"})

    

}