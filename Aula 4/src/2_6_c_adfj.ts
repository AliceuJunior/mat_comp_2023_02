function sequence_adfj(n:number): number{
    if (n == 1){
      return 1;
    }else{
      return n * sequence_adfj(n-1);
    }
  }
  console.log (sequence_adfj(13));