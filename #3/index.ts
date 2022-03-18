/**
 * LOGEST function.
 * https://www.statisticshowto.com/probability-and-statistics/regression-analysis/find-a-linear-regression-equation
 * http://www.exceluser.com/formulas/how-to-calculate-both-types-of-compound-growth-rates.html
 * https://www.excelfunctions.net/excel-logest-function.html
 * @param data 
 */
export default function logest(ys: number[]): number {
  let result: number = 0;
  let ysLength: number = ys.lenght;
  let isBelowZero: number = 0;
  let sumX: number = 0;
  let sumY: number = 0;
  let sumXY: number = 0;
  let sumXX: number = 0;
  let sumYY: number = 0;
  let defalutValues: number[] = [1,2,3,4,5];
  
  for(var i = 0; i < ys.length; i++){ 
    if (ys[i] <= isBelowZero){
       result = NaN;
       break;
    }
    else{
            sumX += i + 1;
            sumY += ys[i];
            sumXY += (sumX*ys[i]);
            sumXX += (sumX*sumX);
            sumYY += (ys[i]*ys[i]);
    }
  }
  
  if (result != NaN){
    result = (ysLength * sumXY - sumX * sumY) / (ysLength * sumXX - sumX * sumX);
  }
  
  return result;
}
