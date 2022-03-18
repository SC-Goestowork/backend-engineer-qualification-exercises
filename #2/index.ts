/**
 * Calculates the ratio between the amount of time when status is AVAILABLE and
 * the amount of time between startDateTime inclusive and endDateTime exclusive.
 * @param startDateTime 
 * @param endDateTime 
 */
export function availability(startDateTime: Date, endDateTime: Date): number {
  const Day_Conversion = 1000 * 60 * 60 * 24;
  
  return Math.floor((endDateTime - startDateTime) / Day_Conversion);
}

/**
 * Generates the outages between startDateTime inclusive and endDateTime exclusive.
 * An outage is PARTIAL if the status within the period is PARTIALLY_AVAILABLE.
 * Similarly, an outage is MAJOR if the status within the period is MAJOR.
 * @param startDateTime 
 * @param endDateTime 
 */
export function outages(startDateTime: Date, endDateTime: Date): { type: 'PARTIAL' | 'MAJOR', timestamp: Date, duration: number }[] {
  const Day_Conversion = 1000 * 60 * 60 * 24;
  
  let delayStatus: string = '';
  let partialDayCutoff: number = 15;
  let startDay: number =  Date.UTC(startDateTime.getFullYear(), startDateTime.getMonth(), startDateTime.getDate());
  let endDay: number = Date.UTC(endDateTime.getFullYear(), endDateTime.getMonth(), endDateTime.getDate());
  let delayDays: number = = Math.floor((endDay - startDay) / Day_Conversion);
  let timestamp: Date = endDateTime - startDateTime;
  
  if (delayDays <== partialDayCutoff){
    delayStatus = 'PARTIAL';
  }
  else{
    delayStatus = 'MAJOR';
  }
  
  return new Array(delayStatus, timestamp, delayDays);
}
