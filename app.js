

const daysEls = document.querySelectorAll(".day");
daysEls.forEach(day=>  {
    day.addEventListener("click", event => {
        const date= event.target.dataset.date;
        // document.getElementById("people").innerText = `schedule for ${monthDispla} ${this.innerText}, ${year}`;
        document.getElementById("people").innerText = "Schedule for " +'\n' + data+ "2022";
        const dsp=document.getElementById("disappear").innerHTML = "";
          });

})

const date = new Date();
let monthsArray    = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//document.querySelector(" h1").innerHTML = months[date.getMonth()];

const arrowR = document.getElementById("arrowR");
const monthElement = document.getElementById("month");


function goToNextMonth() {
    let monthDisplayed = monthElement.innerText.slice(0, -5);
    let year = monthElement.innerText.split(" ")[1];
    if (monthDisplayed === "December") {
        year++;
    }
    let nextMonth;
    if (monthDisplayed !== "December") {
        nextMonth = monthsArray[monthsArray.indexOf(monthDisplayed) + 1];
    } else {
        nextMonth = monthsArray[0];
        monthDisplayed = "January";
        monthElement.innerText = `${monthDisplayed} ${year}`;
    }
    let startingDayOfNextMonth = moment().year(parseInt(year)).month(monthsArray.indexOf(nextMonth)).startOf('month').day();
    let numberOfDaysInNextMonth = moment().year(parseInt(year)).month(nextMonth).daysInMonth();

    monthElement.innerText = `${nextMonth} ${year}`;
}

arrowR.addEventListener("click", goToNextMonth);