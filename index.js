 let num =2467;
   sum=0;
   
   while(num >0){
	  res=num%10;
   num=(num-res)/10
   if(res%2 !== 0){
	   sum += res;
   }
   }
   
   console.log(sum);
   