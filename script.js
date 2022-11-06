function heapify(arr){
    let primerValor=arr[0];
    arr[0]="undefined";
    arr.push(primerValor);
    largo=arr.length;

    let padre_index = Math.trunc(largo / 2); 
    let hijoMenor = padre_index * 2; 
    let hijoMayor = padre_index * 2 + 1; 

    while (padre_index > 0 ) {
        let valorPadre = arr[padre_index];
        
        if (arr[padre_index] > arr[hijoMayor]) {
            arr[padre_index] = arr[hijoMayor];
            arr[hijoMayor] = valorPadre;
    
        } else if (arr[padre_index] > arr[hijoMenor]) {
            arr[padre_index] = arr[hijoMenor];
            arr[hijoMenor] = valorPadre;
       
        }
        padre_index = padre_index - 1;
        hijoMenor = padre_index * 2;  ;
        hijoMayor = (padre_index * 2) + 1;        
   
    }
    console.log(arr);


}


heapify([20,3,8,14,9,6,2]);
    
  