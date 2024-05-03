{

    //object destructuring
    const user = {
        id: 20-42277-1,
        name:{
            firstName:"rakibul",
            lastName:"islam",
        },
        contactNo:"0177048226",
        address:"rajbari"
    }

    // const {contactNo,name:{firstName} = user;
    const {contactNo,name:{firstName : name}} = user; //use firstName as name



    

    //array destructuring
    const myFriends = ["asad","joy","santo","sagor","sojib"]

    // const [a,b,c] = myFriends; 
    // const [a,bestFriend,b]= myFriends;
    // const [,,bestFriend]= myFriends;
       const [,,bestFriend, ...rest] = myFriends;  //this will store rest of the value into this variable



}