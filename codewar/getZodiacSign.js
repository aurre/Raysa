const getZodiacSign = (day, month) => {
    var array = new Array(day, month);

    switch (true) {
        case ((array[0] > 21 && array[1] == 3) || (array[0] < 19 && array[1] == 4)):
            console.log('Aries');
            break;
        case ((array[0] > 20 && array[1] == 4) || (array[0] < 20 && array[1] == 5)):
            break;
            console.log('Taurus');
        case ((array[0] > 21 && array[1] == 5) || (array[0] < 20 && array[1] == 6)):
            console.log('Gemini');
            break;
        case ((array[0] > 21 && array[1] == 6) || (array[0] < 22 && array[1] == 7)):
            console.log('Cancer');
            break;
        case ((array[0] > 23 && array[1] == 7) || (array[0] < 22 && array[1] == 8)):
            console.log('Leo');
            break;
        case ((array[0] > 23 && array[1] == 8) || (array[0] < 22 && array[1] == 9)):
            console.log('Virgo');
            break;
        case ((array[0] > 23 && array[1] == 9) || (array[0] < 22 && array[1] == 10)):
            console.log('Libra');
            break;
        case ((array[0] > 23 && array[1] == 10) || (array[0] < 21 && array[1] == 11)):
            console.log('Scorpio');
            break;
        case ((array[0] > 22 && array[1] == 11) || (array[0] < 21 && array[1] == 12)):
            console.log('Sagittarius');
            break;
        case ((array[0] > 22 && array[1] == 12) || (array[0] < 19 && array[1] == 1)):
            console.log('Capricorn');
            break;
        case ((array[0] > 20 && array[1] == 1) || (array[0] < 18 && array[1] == 2)):
            console.log('Aquarius');
            break;
        case ((array[0] > 19 && array[1] == 2) || (array[0] < 20 && array[1] == 3)):
            console.log('Pisces');
            break;
        default:
            console.log('Eres un alien');
    }

};

getZodiacSign(10,10);





