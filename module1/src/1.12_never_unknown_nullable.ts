// never_unknown_nullable

{

    const searchName = (value:string | null)=>{
        if(value){
            console.log("searching");
        }
        else{
            console.log("there is nothing to search");
        }
    }

    searchName("rakibul")
    searchName(null)

    const getSpeedPerSecond = (value: unknown)=> {
        if (typeof value === "number"){
            const convertedSpeed = (value * 1000/3600);
            console.log(`The speed is ${convertedSpeed}`);
        }
        else if(typeof value === "string"){
            const [result, unit] = value.split(" ");
            // console.log(result,unit);       
            const convertedSpeed = (parseFloat(result) * 1000/3600);    
            console.log(` Speed is ${convertedSpeed}`);
        }
        else{
            console.log("wrong input");
            
        }
    }
    // getSpeedPerSecond(120)
    getSpeedPerSecond(`100 kmh^-1`)

    
    //never
    const throwError = (msg: string):never =>{
        throw new Error(msg);
    }
    
    throwError("error happening");
    


}