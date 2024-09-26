// Nullable types

function greet(name: string | null | undefined){

  if(name){
    console.log(name.toUpperCase())
  } else {
    console.log('Holla')
  }
}

greet('Kennedy Munyao')