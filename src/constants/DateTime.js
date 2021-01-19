function getDate() {
  const date=[];

  for(let i=1;i<31;i++){
    date.push(`${i}/01`);
  }
  return date;
}

const DATE = getDate();

export default DATE;
// function getMonth() {
//   const month=[];
//   for(let i=0;i<12;i++){
//     month.push({value:i, label: i+1});
//   }
//   return month;
// }