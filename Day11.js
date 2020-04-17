function checkDate (dob){
    const dateEx = /^\d{2}[-]\d{2}[-]\d{4}$/
    if(dob.match(dateEx)){
        dob = dob.split("-")
        var dd = parseInt(dob[0])
        var mm = parseInt(dob[1])
        var yy = parseInt(dob[2])
        var days = [31, 28, 31, 30, 31, 30, 31,31,30,31,30,31]

        if (mm === 1 || mm > 2){
            if(dd > days[mm - 1]){
                return "invalid"
            }
        }
const today = new Date;
const birthday = new Date(today.getFullYear(), mm - 1, dd)
if(today > birthday){
    birthday.setFullYear(today.getFullYear()+1)
}
const msd = 1000*60*60*24
var days = Math.ceil((birthday - today) / msd)
return days.toString() + "Days"}
else {
    return "wrong date format"
}
}
console.log(checkDate("18-04-1999"))