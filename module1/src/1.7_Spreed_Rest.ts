//Spreed and Rest Operator
{

    //spread operator
     const user1: string[] = ["rakibul","asad","joy"];
     const user2: string[] = ["rahat","rahul","ratul"];

    // user1.push(user2) //this will give error because we cannot push array  into string type value
     
     user1.push(...user2)  // this will spread all the string first and we can push string into string type

     const mentors1 = {
        typeScript:"mezba",
        redux: "mir",
        dbms: "mizan"
     }

     const mentors2 = {
        prisma:'Firoz',
        next:'Tanmoy',
        cloud:'Nahid'
     }

     const mentorList ={
        ...mentors1,
        ...mentors2
     }


    //rest operator
     const myFriends = (...friends: string[]) =>{  

         friends.forEach((friends:string)=>console.log(`Hi ${friends}`)
         )
     }

     myFriends("asad","joy","santo")  //can pass any number of parameter





}