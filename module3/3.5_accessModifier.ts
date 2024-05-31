{


   // ----------------------- _balance (_ used to differentiate private variables)

    class BankAccount{
       public readonly id: number;
       public name:string;
    //    private _balance: number;
       protected _balance: number;

        constructor(id: number, name: string, balance: number ) {
            this.id = id;
            this.name = name;
            this._balance  = balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class Student extends BankAccount{
        test(){
            this.
        }
    }

    const acc1 = new BankAccount(111,"Mr. X",20);
    acc1.addDeposit(300)

    const myBalance = acc1.getBalance();
    console.log(myBalance);
    








}