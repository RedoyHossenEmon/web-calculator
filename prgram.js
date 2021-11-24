const allBtn = document.querySelectorAll('button');
const input = document.querySelector('.head');
let on = document.querySelector('.on');

function readfun() {
    allBtn.forEach(ecol => {
        ecol.classList.remove('color')
    });
}
// var sign = ['+', '-', '*', '/'];
// for(let srl in sign) {
// // console.log(sign[srl])
// let plus = '+'; if(plus = sign[srl]){console.log(plus)}
// }
let le = '='
if(le =="=" || "-"){console.log('man');}

allBtn.forEach(e => {
    e.addEventListener('click', function () {
        let bvalue = e.getAttribute('data-value');
        let prevalue = input.value.length

        if (bvalue >= 1 && bvalue <= 9 && (prevalue < 15)) {
            input.value += bvalue;
        } else if ((bvalue == "+") || (bvalue == "*") || (bvalue == "-") || (bvalue == "/") && (prevalue < 15)) {
            let invalue = input.value;
            var magic = invalue.charAt(invalue.length - 1);


            let check = on.value;
            if (check == "sort" && invalue != "") {

                if ((magic == "*" || magic == "-" || magic == "/" || magic == "+")) {
                    input.value = invalue.substr(0, invalue.length - 1);
                    readfun();
                    this.classList.add('color')
                } else {
                    input.value = eval(invalue); readfun();
                    this.classList.add('color')
                }

            }


            if (invalue == "") {
                input.value = ""
            } else if (magic == "*" || magic == "-" || magic == "/" || magic == "+") {
                input.value = invalue.substr(0, invalue.length - 1);
                input.value += bvalue
            } else {
                input.value += bvalue;
            }
        } else if (bvalue == 00 || bvalue == 0 && (prevalue < 15)) {
            let invalue = input.value;
            if (invalue != "") {
                input.value += bvalue
            } else {
                input.value = ""
            }
        } else if (bvalue == "." && (prevalue < 15)) {
            let invalue = input.value;
            let valuel = invalue.length;
            let i = 0;

            while (i < valuel) {
                var crecter = invalue.charAt(valuel - i)
                i++
            }
            if (crecter == ".") { //input.value = invalue;
            } else if (invalue == "") {
                input.value = "0."
            } else {
                input.value += bvalue
            }
        } else if (bvalue == "c") {
            input.value = ""; readfun();
        } else if (bvalue == "del") {
            let invalue = input.value;
            var magic = invalue.charAt(invalue.length - 1);
            if ((magic == "*" || magic == "-" || magic == "/" || magic == "+")) { readfun(); }
            input.value = invalue.substr(0, invalue.length - 1);

        } else if (bvalue == "=") {

            input.value = eval(input.value); readfun();
        }

    })
})

on.addEventListener('click', function () {
    let ofValue = on.value;
    readfun();

    if (ofValue == "huge") {
        on.innerText = "sort";
        on.value = "sort"
    } else if (ofValue == "sort") { on.innerText = "huge"; on.value = "huge" }
})
