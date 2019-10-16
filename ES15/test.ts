let colorFunction = function (data , ...color){

   for(let i in color){
      console.log(color[i]);
   }
}


colorFunction("data1","red1");
colorFunction("data2","red2","green2");