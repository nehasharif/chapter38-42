// Problem 1
function pow(a,b){
    return Math.pow(a,b);
}
var result = pow(2,3);
document.writeln(result +"<br");

// Problem 2
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !==0)||(year % 400 ===0)){
     document.writeln(`${year} is a leap year <br>`)
    }else{
       document.writeln(`${year} is not a leap year <br>`)
    }
}
isLeapYear(2012);
isLeapYear(2016);
isLeapYear(2020);
isLeapYear(2023);

// Problem 3
function calculateS(a,b,c){
    return (a+b+c)/2;
}
function areaOfTriangle(a,b,c){
    var S = calculateS(a,b,c);
    var area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    document.writeln(`Area of triangle: ${area.toFixed(2)}<br>`)
}
areaOfTriangle(2,3,4);

// Problem 4
function getAverage(a,b,c){
    return (a+b+c)/3
}
function getPercentage(a,b,c){
    var total = 300;
    return((a+b+c)/total)*100;
}
function mainFunction(m1,m2,m3){
    var avg = getAverage(m1,m2,m3);
    var per = getPercentage(m1,m2,m3);
    document.writeln(`Average Marks: ${avg.toFixed(2)} <br>`)
    document.writeln(`Percentage: ${per.toFixed(2)} <br>`)
}
mainFunction(75,80,90)

// Problem 5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
document.writeln(`${customIndexOf("Karachi", "a")}<br>`);

// Problem 6
function removeVowels(sentence){
    var result = "";
    for(var i=0; i<sentence.length; i++){
        var char = sentence[i].toLowerCase();
        if(char!=='a' && char!=='e'&& char!=='o' && char!=='u'){
            result +=sentence[i];
        }
    }
    document.writeln(`Without vowels: ${result}`);
}
removeVowels("Hello Karachi"+"<br>");

// Problem 7
function countSuccessiveVowels(text){
    var count = 0;
    for(var i =0;i<text.length-1;i++){
        var pair = (text[i]+text[i+1].toLowerCase());
        switch(pair){
            case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
                case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
                    case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
                        case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
                            case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
                                count++;
                                break;
        }
    }
    document.writeln(`Text: ${text}`);
    document.writeln(`Number of successive vowels: ${count}<br>`);
}
countSuccessiveVowels("Pleases read this application and give me gratuity"+"<br>");

// Problem 8
var km =10;
function toMeter(k){
    var m = k*1000;
    document.writeln(`Meters: ${m}<br>`);
}
function toFeet(k){
    var f = k*3280.84;
    document.writeln(`Feet: ${f}${f.toFixed(2)}<br>`);
}
function toInches(k){
    var inch = k*39370.1;
    document.writeln(`inches: ${inch.toFixed(2)}<br>`);
}
function toCentimeters(k){
    var cm = k*10000;
    document.writeln(`Centimeteres: ${cm}<br>`);
}
toMeter(km);
toFeet(km);
toInches(km);
toCentimeters(km);

// Problem 9
function calculateOvertimePay(totalHours){
    var overtimeRate = 12;
    var standardHours = 40;
if(totalHours > standardHours){
    var extraHours = totalHours - standardHours;
    var overtimePay = extraHours*overtimeRate;
    document.writeln(`Total hours worked: ${totalHours}<br>`);
    document.writeln(`Overtime Pay: Rs.${overtimePay}`);
}else{
    document.writeln(`Worked ${totalHours}hours.No overtime pay earned.`)
}
}
calculateOvertimePay(45);

// Problem 10
function calculateNotes(amount) {
    // 100 ke notes nikalne ke liye
    var hundredNotes = Math.floor(amount / 100);
    var remainingAmount = amount % 100;

    // 50 ke notes nikalne ke liye
    var fiftyNotes = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;

    // 10 ke notes nikalne ke liye
    var tenNotes = Math.floor(remainingAmount / 10);

    document.writeln(`Total Amount: ${amount} <br>`);
    document.writeln(`100 Notes: ${hundredNotes} <br>`);
    document.writeln(`50 Notes: ${fiftyNotes} <br>`);
    document.writeln(`10 Notes: ${tenNotes} <br>`);
}

// Function Call
calculateNotes(470);