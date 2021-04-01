function DistinctList(arr) { 
    let clones = 0;
  
   for(let x=0; x<arr.length; x++){
          for(let k=0; k<arr.length; k++){
              if(arr[x]===arr[k] && x!==k){
                  clones++;
                 arr.splice(arr.indexOf(arr[x]), 1)
              }
          }
      }
  
      return clones;
  
  }
  
  console.log(DistinctList([0,-2,-2,5,5,5]))//3
  
  console.log(DistinctList([100,2,101,4]))//0
     