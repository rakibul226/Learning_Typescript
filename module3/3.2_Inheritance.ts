{

//-----------------------------------------------------------------------------------------

    /*  
        class Student {
            name: string;
            age:number;
            address:string;

            constructor(name:string, age:number, address:string){
                this.name = name;
                this.age = age;
                this.address = address;
            }

            getSleep(numOfHours: number){
                console.log(`${this.name} will sleep for ${numOfHours} hour`);
                
            }
        }

        const S1 = new Student("Student",20,"rajbari");

        S1.getSleep(20)
    */

//-----------------------------------------------------------------------------------------
  
  /*  
        class Teacher{
            name: string;
            age:number;
            address:string;
            designation: string;

            constructor(name:string, age:number, address:string, designation:string){
                this.name = name;
                this.age = age;
                this.address = address;
                this.designation = designation
            }

            getSleep(numOfHours: number){
                console.log(`${this.name} will sleep for ${numOfHours} hour`);
            }
            takeClass(subject:string){
                console.log(`${this.name} will take ${subject} class`);
            }

        }

        const T1 = new Teacher("Teacher",20,"rajbari","professor");

        // T1.getSleep(20)
        T1.takeClass("bangla")

    */

// -------------------------------------------------------------------------------------

    // /* 
        class Parent{
            name: string;
            age:number;
            address:string;

            constructor(name:string, age:number, address:string){
                this.name = name;
                this.age = age;
                this.address = address;
            }

            getSleep(numOfHours: number){
                console.log(`${this.name} will sleep for ${numOfHours} hour`);
                
            }
        }

        class Student extends Parent {
            constructor(name:string, age:number, address:string){
                super(name,age,address)
            }
        }

        class Teacher extends Parent {
            designation:string

            constructor(name:string, age:number, address:string, designation:string){
                super(name,age,address)
                this.designation = designation;
            }

            takeClass(subject:string){
                console.log(`${this.name} will take ${subject} class`);
            }
        }

        const T1 = new Teacher("Teacher",27,"kuril","lecturer")
        const S1 = new Student("rakibul",24,"rajbari")

        T1.takeClass("COA");
        T1.getSleep(6);

        S1.getSleep(8);

    // */ 

}