
// var str1 ="hello world" ;
// var str2 = "javascript" ; 

// let str3 = "hello world33333" ;

// document.getElementById("app3").innerHTML = str3 ;
// document.getElementById("app2").innerHTML = str2 ;
// document.getElementById("app").innerHTML = "Hello world";
// document.write(str1);
// document.write(str2);
// document.write(str3);

// var info={
   
//    firstname: "Vo",  
//    lastname: "Huan", 
//    address : "da nang",
// };
// document.getElementById("info").innerHTML = info.address+info.firstname ;
// // document.write(info.firstname+info.lastname);

// var leng = length.info ;
// if (info.address>=5){
//    console.log(info.firstname+info.lastname,"name will print" )
// }
// else{
//   console.log(info.address,"address") 
// }
// let num = prompt('insert into name' ,10)
// parseInt(num);

// if (NaN(num)&& num >0){
  
// }

// var year =prompt('inser into year' , 10);
//  year = parseInt(year)
// if(year % 4 > 0 && year % 400==0){
//    alert('year is leap' , year);
// }
// else if (year % 4 > 0 || year % 100==0) 
// {
//   alert('year is not leap' , year);


// }


// let num=prompt(' create a number ');
// num=parseInt(num);
//   if (isNaN(num)){
//     alert('this is not a number ')
//   }
//   else {
//     for (let i =0 ; i < num ; i++)
//     {
//        alert(' this is a number ' , i);

//     }

// }


  let sell=prompt(' insert a sell') ;
    sell=parseInt(sell);
 let  salary =  sell/10 ;
   //   salary = parseInt(salary)
 
  if ( salary>=1000 ){
   let total = salary-((salary-1000)/10) ;
        alert('salary is' + total  );
        document.getElementById('app')=innerHTML
  }
  else{
   
       alert('salary is' + salary);
      

  }

//////

const $=(id) => {
   return document.getElementById(id) 

}
let ar =[2 , 3 , 5 ,6 ,7 ,8 ,4 ,10 ,12 ,11 ,18 ,14  ,16, 20, 19] ;
let i=0 ;
do {
   const n=prompt(' insert a item $(i+1)') ;
   ar.push(n) ;
   is_continue = confirm(' do you want to continue ?');

}
while(is_continue);

prompt(' insert a new array of items');
for ( let i=0 ; i< ar.length ; i++ ){
   if ( a[i]>a[i++]){
      a[i++]==a[i] ;
      a[i]==a[i++]
   }
   else {
     prompt(' next array' + a[i++]) ;
   }
   is_continue =confirm('end of array arragerment ')
   break ;
  
}







