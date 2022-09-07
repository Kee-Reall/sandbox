function uniteUnique(...arr) {
  console.log(arr.flat(Infinity))
  return arr.flat().filter((el,i,ar)=>{
    if(ar.indexOf(el) == i) return el
  })
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));