function getDate() {
  const date=[];

  for(let i=1;i<31;i++){
    date.push(`${i}/01`);
  }
  return date;
}

const DATE = getDate();

export default DATE;
