{

    //-------------------------boolean
    // const createPromise = () : Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject)=>{
    //         const data : boolean = "something"
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // const showData = async () :Promise<boolean> => {
    //     const data :boolean = await createPromise();
    //     console.log(data);
    //     return data;
    // }

    // showData();


    //----------------------------------boolean
    // const createPromise = () : Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject)=>{
    //         const data : boolean = true;
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // const showData = async () :Promise<boolean> => {
    //     const data :boolean = await createPromise();
    //     console.log(data);
    //     return data;
    // }
    
    // showData();


    //--------------------------------------------object

    // type newObj = {data: string};

    // const createPromise = () : Promise<newObj> => {
    //     return new Promise<newObj>((resolve, reject)=>{
    //         const data : newObj = {data: "newData"};
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // const showData = async () :Promise<newObj> => {
    //     const data :newObj = await createPromise();
    //     console.log(data);
    //     return data;
    // }

    // showData();




    type GetData = {
        id: number;
        userId:number;
        title:string;
        completed:boolean
    }

    const getData = async (): Promise<GetData>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
        
    }

   getData();







}