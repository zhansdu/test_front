export function formatDate(date?:string){
  if(date){
    const res = new Date(date).toISOString().split("T")[0].split("-");
    return `${res[1]}-${res[2]}-${res[0]}`;
  }
  return date;
}

export function formatTime(time?:string){
  if(time){
    const timeParts: string[] = time.split(":");
    let hours: number = parseInt(timeParts[0]);
    const minutes: string = timeParts[1];

    const period: string = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; 

    const formattedTime: string = hours + ":" + minutes + " " + period;
    return formattedTime;
  }
  return time;
}

export function formatDateTime(datetime?:string){
  if(datetime){
    const date = datetime.split(" ")[0];  
    const time = datetime.split(" ")[1];
  
    return `${formatDate(date)} -- ${formatTime(time)} `;
  }
  return datetime;
}