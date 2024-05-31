{

    //oop - class

//-----------------------------------------------------------------------------------------

    /*

        class Animal {

            public name: string;  //by default public
            public species: string;
            public sound: string;

            constructor(name:string, species: string, sound: string){
                this.name = name;
                this.species = species;
                this.sound = sound;
            }

            makeSound(){
                console.log(`the ${this.name} says  ${this.sound}`);   
            }
        }

        const dog = new Animal("german shepard","dog","ghew");
        const cat = new Animal("mini","cat","meaw");

        cat.makeSound();
        dog.makeSound();

    */

//-----------------------------------------------------------------------------------------

    // /*
        class Animal {
            constructor( public name:string, public species: string, public sound: string){ 
            }

            makeSound(){
                console.log(`the ${this.name} says  ${this.sound}`);   
            }
        }

        const dog = new Animal("german shepard","dog","ghew");
        const cat = new Animal("mini","cat","meaw");

        cat.makeSound();
        dog.makeSound();

    // */

//-----------------------------------------------------------------------------------------

}