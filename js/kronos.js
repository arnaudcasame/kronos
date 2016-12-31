var kronos = (function () {

    //defining and assigning variables
    var now = new Date(),
        date = now.getDate(),
        month = now.getMonth() + 1,
        year = now.getFullYear(),
        weekDay = now.getDay(),
        heure = now.getHours(),
        minute = now.getMinutes(),
        seconde = now.getSeconds(),
        krono = null;
        dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        jourString = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    // Defining functions
    /**
     * Determine whether the actual year is leap or not
     * @return boolean
     */
    function isLeap(year) {
        if (((year % 4) === 0 && (year % 100) !== 0) || (year % 400) === 0) {
            return true;
        }
        return false;
    }


    /**
     * Runs back and get the 1st day of the month
     * @param(date) integer, actual date from where you stand
     * @param(weekDay) integer, actual day of the actual week. 0 -> sunday, 1 -> monday
     * @return integer, the week day of the month's first date
     */
    function getMonthDay1(date, weekDay) {
        for (var i = date - 1; i > 0; i--) {
            if (weekDay === -1) {
                weekDay = 6;
            }
            weekDay--;
        }
        return weekDay;
    }

    function timeSt_dateStr(timestamp){
        var dateStr = new Date(timestamp);
        return dateStr;
    }
    
    function frenchDate (timestamp){
        var timeSt = new Date(timestamp);
        var annee = timeSt.getFullYear();
        var mois = timeSt.getMonth();
        var date = timeSt.getDate();
        var jour = timeSt.getDay();
        console.log(jourString[jour]);
        return jourString[jour]+' '+
                date+' '+
                pullMonth(mois+1).fr+' '+annee;
    }

    function _Now(){
        krono = now;
        krono = Date.parse(krono);
        krono = frenchDate(krono);
        console.log(heure, minute, seconde);
        console.log(now.getTime());
        return krono;
    }

    /**
     
     
     */
    function pullMonth(monthNum, year) {
        switch (monthNum) {
        case 1:
            return {
                fr: "janvier",
                nbreJr: 31,
                en: "january",
                abren: "jan.",
                abrfr: "janv."
            };
            break;
        case 2:
            return {
                fr: "février",
                nbreJr: isLeap(year) ? 29 : 28,
                en: "february",
                abren: "feb.",
                abrfr: "févr."
            };
            break;
        case 3:
            return {
                fr: "mars",
                nbreJr: 31,
                en: "march",
                abren: "mar.",
                abrfr: "mars"
            };
            break;
        case 4:
            return {
                fr: "avril",
                nbreJr: 30,
                en: "april",
                abren: "apr.",
                abrfr: "avr."
            };
            break;
        case 5:
            return {
                fr: "mai",
                nbreJr: 31,
                en: "may",
                abren: "may",
                abrfr: "mai"
            };
            break;
        case 6:
            return {
                fr: "juin",
                nbreJr: 30,
                en: "june",
                abren: "jun.",
                abrfr: "juin"
            };
            break;
        case 7:
            return {
                fr: "juillet",
                nbreJr: 31,
                en: "july",
                abren: "jul.",
                abrfr: "juil."
            };
            break;
        case 8:
            return {
                fr: "août",
                nbreJr: 31,
                en: "august",
                abren: "aug.",
                abrfr: "août"
            };
            break;
        case 9:
            return {
                fr: "septembre",
                nbreJr: 30,
                en: "september",
                abren: "sept.",
                abrfr: "sept."
            };
            break;
        case 10:
            return {
                fr: "octobre",
                nbreJr: 31,
                en: "october",
                abren: "oct.",
                abrfr: "oct."
            };
            break;
        case 11:
            return {
                fr: "novembre",
                nbreJr: 30,
                en: "november",
                abren: "nov.",
                abrfr: "nov."
            };
            break;
        case 12:
            return {
                fr: "décembre",
                nbreJr: 31,
                en: "december",
                abren: "dec.",
                abrfr: "déc."
            };

        default:
            alert("- You entered a wrong month number \n- "+monthNum+' is not a month number');
        }
    }

    return {
        isLeap: isLeap,
        getMonthDay1: getMonthDay1,
        pullMonth: pullMonth,
        getFrDate: frenchDate,
        now: _Now
    };
})();

console.log(kronos.pullMonth(1));