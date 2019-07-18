// Links to read
// ftp://ftp.micronet-rostov.ru/linux-support/books/programming/JavaScript/[Packt]%20-%20Object-Oriented%20JavaScript%20-%20[Stefanov].pdf ===> chapter 2
// http://sd.blackball.lv/library/JavaScript_Patterns_%282010%29.pdf ===> Essentials: minimizing globals, for, for in loops. Literals and Constructors: Error Objects
// https://learn.javascript.ru/let-const
// https://learn.javascript.ru/destructuring
// https://learn.javascript.ru/es-string

// Task 1
// You have the data of years, months, and days that contains some values

const data = {
    2018: {
        1: {
            1: 123,
            2: 435,
            4: 543,
            5: 55,
            6: 35,
            10: 35,
            11: 76,
            14: 43,
            15: 54,
            16: 577,
            18: 887,
        },
        3: {
            1: 34,
            2: 56,
            4: 12,
            5: 89,
            7: 67,
            8: 76,
            12: 33,
            14: 22,
            16: 11,
            17: 65,
            18: 90,
            21: 11,
            23: 12,
            25: 12,
        },
        4: {
            2: 54,
            5: 17,
            6: 98,
            7: 45,
            9: 99,
            10: 107,
            11: 45,
            13: 34,
            14: 43,
            15: 23,
            17: 65,
            18: 66,
            19: 43,
            21: 32,
            24: 65,
        },
        5: {
            1: 17,
            2: 98,
            3: 45,
            5: 99,
            6: 107,
            8: 67,
            11: 54,
            13: 45,
            14: 76,
            16: 435,
            17: 98,
            18: 12,
            23: 33,
            24: 8,
        },
        7: {
            2: 34,
            5: 1,
            6: 54,
            7: 7,
            10: 324,
            11: 107,
            12: 1,
            13: 655,
            14: 99,
            15: 76,
            16: 112,
            17: 321,
            19: 1,
            22: 77,
            23: 56,
            26: 1,
        },
        9: {
            6: 34,
            7: 21,
            8: 6,
            9: 8,
            10: 44,
            11: 56,
            13: 34,
            16: 55,
            18: 76,
            22: 8,
            24: 45,
        },
        10: {
            1: 47,
            2: 543,
            5: 5,
            6: 11,
            10: 35,
            11: 87,
            14: 6,
            15: 45,
            16: 32,
            18: 34,
        },
        11: {
            1: 6,
            5: 7,
            6: 44,
            8: 9,
            11: 12,
            13: 66,
            14: 45,
            18: 34,
            23: 8,
        },
    },
    2017: {}
};

// You need to write function that accepts data as the first parameter and day as the second.
// Example daySummary(data, 'wednesday') // Returns some number like 1333

function daySummary(data, day) {

    let daysArr = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        inputDay = daysArr.indexOf(day),
        sum = 0;

    if(!daysArr.includes(day)) {
        console.log("Wrong input");
    }

    for(keyYear in data) {
        let year = keyYear;
        for(keyMounth in data[keyYear]) {
            let mounth = keyMounth;
            for(keyDays in data[keyYear][keyMounth]){
                let days = keyDays,
                    detaIteration = new Date(year+","+mounth+","+days);
                    dayIteratiion = detaIteration.getDay();

                if(inputDay === dayIteratiion) {
                    sum += data[keyYear][keyMounth][keyDays];
                }
            }
        }
    }

    console.log(sum);
}

daySummary(data, "Tuesday");
//
// // Task 2
// // You have div's structure - check index html. There is click event listener on the deepest div
// const clicker = document.getElementById('clicker');
// clicker.addEventListener('click', function (e) {
//     console.log('Clicker clicked!');
//
//     // here you need to trigger function that goes through parent nodes and change the ones with class target color to #00ffff
//     paintParentTargets(e.target);
// });
//
// function paintParentTargets(element) {
//     // Advice - use while loop for iteration. Parent can be accessed through node's parentNode property
// }