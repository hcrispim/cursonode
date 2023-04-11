

function sum(x) {
  return new Promise((resolve, reject)=>{
    if(typeof x != 'number'){
      reject('Tá de brincadeira?');
    }
    setTimeout(()=>{
      resolve(x + 70);
    },3000);
  })

}

async function main(){
  try {
    const resultado = await sum('a');
    console.log('resultado async/await: ' + resultado);
  } catch (error) {
    console.log('temos problemas: ' + error);
  }
}

main();