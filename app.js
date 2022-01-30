// solution 1
// const getCard = () =>
//   [...`BINGO`].reduce((pre, val, idx) => {
//     const arr = [];
//     while (arr.length < 5) {
//       let num = Math.ceil((Math.random() + idx) * 15);
//       if (!arr.includes(num)) arr.push(num);
//     }
//     return pre.concat((idx - 2 ? arr : arr.slice(0, -1)).map(num => val + num));
//   }, []);
  
// solution 2
// function getCard() {
//   const getRandom = (e, i, r=[]) => {      
//     const a = 1 + 15 * i;
//     const b = (i + 1) * 15;      
//     while (r.length < (e == 'N' ? 4 : 5)){
//         const newItem = Math.round(Math.random() * (b - a) + a);
//         if (!r.includes(e + newItem)) r.push(e + newItem)
//     }      
//     return r
//   }     
//   return [].concat(...['B','I','N','G','O'].map((e,i)=>getRandom(e,i)));
// }

// solution 3
const getCard=()=> {
  let arr=[];
  const str = "BINGO"
  const r=(v)=>Math.random()*14+v
  let z=1
  let max
  
  for (let j=0; j< str.length; ++j){
    max= j===2 ? 4:5
    
     for (let i=0; i<max; ++i){
       arr.push(str[j]+r(z))
  }
   z+=15
     
  }

return arr
}
  

console.log(getCard());
