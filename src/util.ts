
export function oddPosAverage(nums: number[]): number {
  const [sum, count] = nums
    .filter(x => x % 2 == 1)
    .map(x => [x,1])
    .reduce((acc,cur) => [acc[0]+cur[0], acc[1]+cur[1]], [0,0]);

  return (count) ? sum / count : 0;
  
}

export function cleanQueryInput(input:any): number[] {
  let output: number[] = [];
  if (input !== undefined) {
    if (typeof input == 'string') {
      const temp = input.split(',');
      for (const x in temp){
        if (Number(x) !== NaN) {
          output.push(Number(x));
        }
      }
    }
  } 
  return output;
}
