{
    interface Dev<T,X=null> {
        name: string;
        computer: {
        brand: string;
        model: string;
        realease: number;
        };
        watch: T;
        bike? : X;
    }


    type mi ={
        brand:string;
        model:string;
        display:string;
    }

    interface AppleWatch {
        brand:string;
        model:string;
        display:string;
        heartTrack:boolean;
        sleepTrack:boolean;
    }

    interface YamahaBike {
        company:string;
        model:string;
    }

    //   const dev1: Dev<{
    //     brand:string;
    //     model:string;
    //     display:string
    //   }> = {

    const dev1: Dev<mi> = {
        name: "rakibul",
        computer: {
        brand: "asus",
        model:"rog 531gt",
        realease:2019,
        },
        watch:{
            brand:"mi",
            model:"m2",
            display:"oled"
        }
    }



    //   const dev2: Dev<{
    //     brand:string;
    //     model:string;
    //     display:string;
    //     heartTrack:boolean;
    //     sleepTrack:boolean;
    //   }> = {

    const dev2: Dev<AppleWatch,YamahaBike>= {
    name: "asad",
    computer: {
      brand: "asus",
      model:"rog 531gt",
      realease:2020,
    },
    watch:{
        brand:"apple",
        model:"watch ultra",
        display:"oled",
        heartTrack: true,
        sleepTrack:true,
    },
    bike:{
        company:"yamaha",
        model:"fz",
    }
  }
}
