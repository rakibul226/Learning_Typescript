{
    /*
        class Counter {
            count: number = 0;
            increment(){
                return (this.count = this.count + 1);
            }
            decrement(){
                return (this.count = this.count - 1);
            }
        }

        const C1 = new Counter();
        console.log(C1.increment());

        const C2 = new Counter();
        console.log(C2.increment());

    */

    /*
        class Counter {
            static count: number = 0;
            increment(){
                return (Counter.count = Counter.count + 1);
            }
            decrement(){
                return (Counter.count = Counter.count - 1);
            }
        }

        const C1 = new Counter();
        console.log(C1.increment());

        const C2 = new Counter();
        console.log(C2.decrement());

    */

        class Counter {
            static count: number = 0;
            static increment(){
                return (Counter.count = Counter.count + 1);
            }
            static decrement(){
                return (Counter.count = Counter.count - 1);
            }
        }

        console.log(Counter.increment());
        console.log(Counter.increment());
        console.log(Counter.increment());

}