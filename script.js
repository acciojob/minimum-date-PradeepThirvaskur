function minDate(dates) {
  //write you code here
	function minDate(dates) {
   const dateObjects= dates.map((date)=>new Date(date));
   //this uses dates in string format to convert into exact dates 
   //op of dateObjects is elobrated form of date
   //console.log(dateObjects)

   const MinDatesObject= new Date(Math.min(...dateObjects));
   //return the nearest date i.e the minimum date 
   //console.log(MinDatesObject)

   //formating the date back to required format
   const year = MinDatesObject.getFullYear(); //console.log(year) 2023
   const Month = String(MinDatesObject.getMonth()+1).padStart(2,'0');// console.log(Month) 03
   const date = String(MinDatesObject.getDate()).padStart(2,'0'); //console.log(date) 01
	return `${year}/${Month}/${date}`
}
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
