{


 
    //constant   --> using extends 


    const addCourseToStudent =<T extends {name:string,email:string,}>( student : T )=>{
        const course = "next dev"
        
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:"Mr X",email:"x@gmail.com",devType:"fronted"})
    const student2 = addCourseToStudent({name:"Mr X",email:"x@gmail.com",hasWatch:"Apple"})

    // const checking = addCourseToStudent({testData:"testData"}); // this  wil give error because of missing constant data value

    




}