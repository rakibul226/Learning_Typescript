{


    // ----------------------- _balance (_ used to differentiate private variables)
 
     class BankAccount{
        public readonly id: number;
        public name:string;
        protected _balance: number;  
 
         constructor(id: number, name: string, balance: number ) {
             this.id = id;
             this.name = name;
             this._balance  = balance;
         }

    // ----------------------------setter---------------------------------
            set deposit(amount: number){
                this._balance = this._balance + amount;
            }

    // -----------------------------getter--------------------------------
        get balance(){
            return this._balance;
        }
    }
 
     class Student extends BankAccount{
         test(){
             this._balance; 
         }
     }
 
     const acc1 = new BankAccount(111,"Mr. X",20);
     acc1.deposit = 50;

    const myBalance = acc1.balance;
    console.log(myBalance);
     
 
 }