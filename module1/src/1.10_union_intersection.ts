{


    //-------------union types

    type Student = "active" | "inactive"
    const student : Student = "active"

    type User ={
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" |"B+";
    }

    const user: User = {
        name:"rakibul",
        gender:"male",
        bloodGroup:"O+"
    }



    type mid = { 
        skill:string[];
        midTerm:"Nest";
    }

    type final = {
        skill:string[];
        finalTerm:"Next"
    }

    type WebTech = mid & final 

    const advanceWebTech : WebTech ={
        skill:["html","css","next","nest"],
        midTerm:"Nest",
        finalTerm:"Next"
    }





}