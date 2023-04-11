function soma(x) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(x + 70);
    },3000);
  })

}

soma(20)
.then((resultado)=>{
   console.log("resolvido " + resultado);
});