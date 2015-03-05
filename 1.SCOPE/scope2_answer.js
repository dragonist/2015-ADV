
function add(arr) {
   var nLen = arr.length;
   var nSum = 0;

   while(nLen){
      nSum+=arr[nLen-1];
      nLen--;
   }
  return nSum;
}

function multiply(arr){
   var nLen = arr.length;
   var nSum = 1;

   while(nLen){
      nSum*=arr[nLen-1];
      nLen--;
   }
  return nSum;
}

function avg(arr){
   var nSum = add(arr);
   return nSum/arr.length;
}

function power(arr) {
   var nLen = arr.length;
   if(nLen !== 2) return;
   return Math.pow(arr[0],arr[1]);
}

function execOperation(funType, sMessage) {
   return function(arg) {
         var result = funType(arg);
         console.log(sMessage + result);
     }
}
