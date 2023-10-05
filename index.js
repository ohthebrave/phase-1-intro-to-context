// Your code here
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    let twoRecords = array.map(arr => createEmployeeRecord(arr));
    return twoRecords
}

function createTimeInEvent(obj, dateStamp) {
    let dateArray = dateStamp.split(' ');
    obj.timeInEvents = [{
        type: "TimeIn",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }]
    return obj
}

function createTimeOutEvent(employeeRecord, dateStamp) {
    let dateArray = dateStamp.split(' ');
    employeeRecord.timeOutEvents = [{
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }]
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecords, dateStamp) {
    let timeIn;
    let timeOut;
    employeeRecords.timeInEvents.find((timeInevent) => {
      if(timeInevent.date === dateStamp) {
        timeIn = timeInevent.hour
      }
    })
  
    employeeRecords.timeOutEvents.find((timeOutEvent) => {
      if(timeOutEvent.date === dateStamp) {
        timeOut = timeOutEvent.hour
      }
    })
    
    return (timeOut - timeIn)/100
  }
  
  function wagesEarnedOnDate(employeeRecords, dateStamp) {
    return hoursWorkedOnDate(employeeRecords, dateStamp) * employeeRecords.payPerHour
  }
  
  function allWagesFor(employeeRecords) {
    let datesArray = employeeRecords.timeInEvents.map((timeInEvent) => timeInEvent.date)
    let wagesearned = 0
    datesArray.map((date) => {
      let dailyWage = wagesEarnedOnDate(employeeRecords, date)
      wagesearned+=dailyWage
    })
    return wagesearned
  
    //test passes one date, function does not return 378
  }
  
  function calculatePayroll(employeeRecordsArray) {
    let payroll = 0
    employeeRecordsArray.forEach((employeeRecords) => {
      payroll += allWagesFor(employeeRecords)
    })
    return payroll
  }







