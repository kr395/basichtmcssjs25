// Genaral code
let gyear;
let gmonth;
let gday;
let ghour;
let gminute;
let gsec;
let dobstrings;

function datepickseter(){
    let picker = document.getElementById("inputDob") ;
    let currentTime = new Date();
    let day = currentTime.getDate(); 
    let month = currentTime.getMonth(); 
    let year = currentTime.getFullYear();
    picker.value = "2000-12-26T22:00"
    picker.max = `${year}-${month+1}-${day}T00:00`;
}
datepickseter()



function getDOB() { 
    // Getting input from html input element 
    localStorage.setItem("inputDob", document.getElementById("inputDob").value)
    let data = localStorage.getItem("inputDob");
    data = document.getElementById("inputDob").value;

    // Convert input data to usable format 
    // as day,month and year 
    let dob = new Date(data); 
    let day = dob.getDate(); 
    let month = dob.getMonth(); 
    let year = dob.getFullYear();
    let hour = dob.getHours();
    let minute = dob.getMinutes();
    let seconds = dob.getSeconds();
  
    // Getting current date and calculating the difference 
    let now = new Date(); 
    let yearDiff = now.getFullYear() - year; 
    let monthDiff = now.getMonth() - month; 
    let dateDiff = now.getDate() - day; 
    let hourDiff = now.getHours() - hour; 
    let minuteDiff = now.getMinutes() - minute; 
    let secondsDiff = now.getSeconds() - seconds; 

    // Calculating the Age 
    if (yearDiff < 0) console.log("invalid date"); 
    else if (monthDiff > 0) { 
        console.log(yearDiff); 
    } else if (monthDiff === 0 && dateDiff >= 0) { 
        console.log(yearDiff); 
    } else { 
        yearDiff = yearDiff - 1; 
        if (monthDiff <= 0) 
            if (dateDiff > 0) monthDiff = 12 + monthDiff; 
            else monthDiff = 11 - monthDiff; 
    } 

    if (dateDiff < 0) { 
        dateDiff = 30 + dateDiff; 
        monthDiff -= 1; 
    } 
  
    // Show calculated age as output 

    // and invalid if wrong input is given 
    if (yearDiff < 0) 
        document.getElementById("duration").innerHTML = "Invalid Date"; 
    else {
        let display = document.getElementById("duration");
        display.innerText = `My current Age is ${yearDiff} years ${monthDiff} months ${dateDiff} days ${hourDiff} hours ${minuteDiff} minutes ${secondsDiff} seconds`
         }       
         
       // Calculating Remaining life
    //    let cYear = now.getFullYear() ; 
    //    let cMonth = now.getMonth() ; 
    //    let cDate = now.getDate() ; 
    //    let cHour = now.getHours() ; 
    //    let cMinute = now.getMinutes() ; 
    //    let cSeconds = now.getSeconds() ; 
    // if(cSeconds < seconds){
    //        secondsDiff = 60 - seconds;
    //        minute -= 1;
    // }  else if(cSeconds < seconds && cMinute < minutes){
    //   secondsDiff = 60 - seconds;
    //        minute -= 1;

} 
  
// Function to provide default date value 
function currentDate() { 
    console.log(formatted()); 
} 
  
function formatted(date = new Date()) { 
    return [ 
        date.getFullYear(), 
        short(date.getMonth() + 1), 
        short(date.getDate()), 
    ].join("-"); 
} 
function short(num) { 
    return num.toString().padStart(2, "0"); 
} 
  
// Calling current date function to set default date value 
currentDate();

setInterval(function () {
let divs = document.querySelectorAll(".divs");
let spans = document.querySelectorAll(".spans");
    let date = new Date();
    let per_sec,per_min,per_hour,per_day,per_month,per_year;
    let txt_sec,txt_min,txt_hour,txt_day,txt_month,txt_year;
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`; 
    //Calculation for min
    per_min = (100 - Math.floor((date.getMinutes()/ 60) * 100));
    txt_min = (60 - date.getMinutes());
      spans[1].innerText = txt_min;
      divs[1].style.width = `${per_min}%`; 
    //Calculation for hour
    per_hour = (100 - Math.floor((date.getHours()/ 60) * 100));
    txt_hour = (24 - date.getHours());
      spans[2].innerText = txt_hour;
      divs[2].style.width = `${per_hour}%`; 
    //Calculation for day
    per_day = (100 - Math.floor((date.getDay()/30) * 100));
    txt_day = gday;
      spans[3].innerText = txt_day;
      divs[3].style.width = `${per_day}%`; 
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`; 
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`; 
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`; 
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`; 
    //Calculation for sec
    per_sec = (100 - Math.floor((date.getSeconds()/ 60) * 100));
    txt_sec = (60 - date.getSeconds());
      spans[0].innerText = txt_sec;
      divs[0].style.width = `${per_sec}%`;

},1000)



// Timer clock 

setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours1');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
  
    // digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
  
    // dot time indicator
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');
  
    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
    // convert to 12 hour format
    if (h > 12) {
      h = h - 12;
    }
  
    // add 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    // set time and label
    hours.innerHTML = h ;
    minutes.innerHTML = m;
    secondes.innerHTML = s;
    ampm.innerText = ap;
  
    // set time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);
