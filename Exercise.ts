import { after } from "node:test";

//Exercise 2
const fruits: string[]=["Apple","Mango","Orange","Pineapple","Grapes"];
console.log(fruits[1]);

//Exercise 4 
function getAverage(a: number[] )
{
    let Tot=0;
    let avg;
    let count;
    count=a.length;
    for (const num1 of a)
    {
      Tot=Tot+num1;
      
    }
   console.log(Tot);
   console.log(count);
   avg=Tot/count;
   console.log(avg);
    
}

const num=[10,20,30,40]
getAverage(num);

//Exercise

class Bankaccount

{

   public owner: string;
   private balance : number;
   protected actype: string;
   depositamt:number;
   afterdep:number;

   constructor(owner: string, balance:number, actype: string,depositamt:number)
   {
      this.owner=owner;
      this.balance=balance;
      this.actype=actype;
      this.depositamt=depositamt;
   }

   protected showbalance()
   {
      console.log(`Balance Amount: ${this.balance}`)
   }

   deposit()
   {
      this.balance+=this.depositamt;
      console.log(`Owner: ${this.owner}`);
      
      console.log(`Deposited Amount: ${this.depositamt}`);
      console.log(`Balance Amount: ${this.balance}`);
   }


   
}


class Savingsaccount extends Bankaccount
{
   showAccountype()
   {
      console.log(`Account type: ${this.actype}`)
   }
}

const bank=new Bankaccount('Sangeetha',10000,'savings',5000);
const type=new Savingsaccount('Sangeetha',10000,'savings',5000);
bank.owner;
type.actype;
type.deposit();
type.showAccountype();


