// Your code here

function createEmployeeRecord(emp) {
  const employee = {};
  employee.firstName = emp[0];
  employee.familyName = emp[1];
  employee.title = emp[2];
  employee.payPerHour = emp[3];
  employee.timeInEvents = [];
  employee.timeOutEvents = [];
  return employee;
}

function createEmployeeRecords(emps) {
  const employeeRecords = [];
  emps.map(employee => employeeRecords.push(createEmployeeRecord(employee)))
  return employeeRecords
}

function createTimeInEvent(emp, time) {
  // let employee = createEmployeeRecord(emp);
  let timeObj = {
    type: "TimeIn",
    hour: parseInt(time.split(' ')[1]),
    date: time.split(' ')[0]
  }
  emp.timeInEvents.push(timeObj)
  return emp
}

function createTimeOutEvent(emp, time) {
  // let employee = createEmployeeRecord(emp);
  let timeObj = {
    type: "TimeOut",
    hour: parseInt(time.split(' ')[1]),
    date: time.split(' ')[0]
  }
  emp.timeOutEvents.push(timeObj)
  return emp
}

function hoursWorkedOnDate(emp, date) {
  console.log('out', emp.timeOutEvents.forEach(function(d) {
    return d.hour }))
  console.log('out', emp.timeInEvents.forEach(d => d.hour) )
  
   let hoursWorked = (emp.timeOutEvents.forEach(d => d.hour) - emp.timeInEvents.forEach(d => d.hour))/100
  
    return hoursWorked
}

function wagesEarnedOnDate(emp, date) {
  let hours = hoursWorkedOnDate(emp, date);
  let pay = hours * emp.payPerHour;
  return pay;
}

function allWagesFor(emp) {
  let datesWorked = emp.timeInEvents.map(obj => obj.date);
  let wages = 0;
  for (let i = 0; i < datesWorked.length; i++) {
    wages = wages + wagesEarnedOnDate(emp, datesWorked[i]);
  }
  return wages;
}














