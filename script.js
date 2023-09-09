const arrayDay = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"]
let date = new Date()
let getDay = arrayDay[date.getDay()]
document.getElementById("CurrentDay").innerText = getDay
let UTCMin = date.getUTCMinutes()
let UTCHour = date.getUTCHours()
document.getElementById("UTCTime").innerText = ` ${UTCHour} : ${UTCMin}`
