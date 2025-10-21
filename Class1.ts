console.log("Welcome playwright");

let sequence =new Array(10,20,30,40,50);
console.log(sequence);
let count=sequence.length;
let sum=0;
for (let i=0;i<5;i++)
{
   sum += sequence[i];



}
let average;
average=sum/count;
console.log(average);

/*let numbers:Array<number> = [1, 2, 4,5, 6, 8];
 
console.log(numbers);
console.log(sequence.length);
console.log(sequence.indexOf(50));
console.log(sequence[4]);
sequence.push(60);
console.log(sequence);
sequence.unshift(50);
console.log(sequence);
sequence.pop();*/


const breads:string[]=["milkbread","Naan","Brownbread","Pita","Kulcha"]

for (const bread of breads)
{
   if(bread.length<=4)
   {
      console.log(`${bread} this bread is small`)
   }
   else if(bread.length<=6 && bread.length>4)
   {
      console.log(`${bread} this bread is medium`)
   }
   else
   {
      console.log(`${bread} this bread is small`)
   }
}


const credentials=[
   {username: 'bob' ,password : 123},
   {username: 'kob' ,password : 12345}
]

console.log(credentials[1].password);

const teachers=[
   {name :'Santhiya', class :4},
   {name : 'Vidhu', class :5}
]
console.log(teachers[1].name);
console.log(teachers[1].class);
   

let numbers:number[] = [12, 22, 41,5, 6, 8];
let even:number[]=[];
let odd:number[]=[];
let prime:number[]=[];
count =numbers.length;
for (const num of numbers)
{
   
      if (num%2==0)
      {
         console.log(`${num} this is even`);
         even.push(num);
      }
      else
      {
         console.log(`${num} this is odd`);
         odd.push(num);
      }
   
      let isprime=true;

      if(num<1)
      {
         isprime=false;
      }

      else 
         for(let i=0;i<num;i++)
      {
         if(num%2==0)
         {
            isprime=false;
            break;

         }
      }
      if(isprime)
      {
         prime.push(num);
      }

         }
         console.log(odd);
         console.log(even);
         console.log(prime);
      
   let a=0; 
   let b=1;
   console.log(a);
   console.log(b);
   let n=10;
   let fib=0;
   let i=1
   while(i<n)
   {
    fib=a+b;
    a=b;
    b=fib;
    console.log (fib);
    i++;
   }



   let browser: string="Firefox"

   switch(browser){
      case "chromium":
         console.log("Chromium browser");
            break;

      case "safari":
      console.log("Safari browser");
      break;

      default:
      console.log("unknown browser");


   }


   function calculator (a:number, b:number, operator : string):number
{
   switch(operator){
      case "add":
         return a+b;
            

      case "sub":
       return a-b;
      

      case "multi":
       return a*b;
      

       case "div":
         if(b!=0)
         {
        return a/b;
         }
         else
         {
            throw new Error("Cannot be divide by 0");
         }
      

      default:
         return 0;
      
   }
}

console.log(calculator(10,6,"div"));


const add= function addition(a:number, b:number): number
{

   return a+b;
}

console.log(add(98,97));


const today: Date =new Date();

const dates={
   day: today.getDate(),
   month: today.getMonth(),
   year: today.getFullYear()
}
 //  englishdate: `${this.day}/${this.month}/${this.year}`



      

console.log(dates.day);

const validemail={
   username:'sangeetha',
   append:'@test.com',
   day: Date.now(),

   email: function(): string {
      return `${this.username}${this.day}${this.append}`
   }
   
   
}
console.log(validemail.email());