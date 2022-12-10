// Your code here
function createEmployeeRecord(recordArray){
    return{
        firstName:recordArray[0],
        familyName:recordArray[1],
        title:recordArray[2],
        payPerHour:recordArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    }

    function createEmployeeRecords(arrayOfArrays){
        return arrayOfArrays.map(recordArray=>createEmployeeRecord(recordArray))
    }

    function createTimeInEvent(employeeRecord, dateStamp){
        let [date, hour] = dateStamp.split(" "); 
        employeeRecord.timeInEvents.push({
            type : "TimeIn",
            hour: parseInt(hour, 10),
            date
            
        })
return employeeRecord
    }

    function createTimeOutEvent(employeeRecord, dateStamp){
        let [date, hour] = dateStamp.split(" "); 
        employeeRecord.timeOutEvents.push({
            type : "TimeOut",
            hour: parseInt(hour, 10),
            date
            
        })
return employeeRecord
    }

    function hoursWorkedOnDate(employeeRecord, date){
        let timeIn=
        employeeRecord.timeInEvents.find(timeIn=>timeIn.date === date)
        let timeOut=
        employeeRecord.timeOutEvents.find(timeOut=>timeOut.date=== date)
        return (timeOut.hour - timeIn.hour)/100
    }

function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord,date) * employeeRecord.payPerHour
}

function allWagesFor(employeeRecord){
    let Sdates =
    employeeRecord.timeInEvents.map(timeIn=>
        timeIn.date)
        let wages = Sdates.map(date=>
            wagesEarnedOnDate(employeeRecord,date))
            return wages.reduce((total,wage)=>
            total + wage)

}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce((total, employeeRecord)=>
    total + allWagesFor(employeeRecord), 0)
}
