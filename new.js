let energy = document.getElementById('Energy');
let materials = document.getElementById('Materials');
let industrials = document.getElementById('Industrials');
let consumerStaples = document.getElementById('Consumer_Staples');
let healthCare = document.getElementById('Health_care');
let financials = document.getElementById('Financials');
let informationTechnology = document.getElementById('Information_Techonology');
let communicationService = document.getElementById('Communication_Service');
let utilities = document.getElementById('Utilities');
let realEstate = document.getElementById('Real_Estate');
let transportation = document.getElementById('transport');

let button = document.getElementById('button');
let clear = document.getElementById('clear');
let linetext = document.getElementById('text');


class com7 {
    constructor() {

    }

    Com7() {
        let isChecked = informationTechnology.checked;
        let isChecked2 = consumerStaples.checked;
        let isChecked3 = communicationService.checked;

        if (linetext.textContent === 'COM7 appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked && isChecked2 && isChecked3) {
            linetext.textContent = 'COM7 appropriate for you';
        }
    }

}
const COM7 = new com7();


class cpall {
    constructor() {

    }

    Cpall() {
        let isChecked = communicationService.checked;
        let isChecked2 = consumerStaples.checked;
        let isChecked3 = utilities.checked;

        if (linetext.textContent === 'CPALL appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked && isChecked2 && isChecked3) {
            linetext.textContent = 'CPALL appropriate for you';
        }
    }

}
const CPALL = new cpall();




class Advanc {
    constructor(){

    }

    Advanc(){
        let isChecked = communicationService.checked;
        let isChecked2 = informationTechnology.checked;

        if (linetext.textContent === 'ADVANC appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked && isChecked2 ) {
            linetext.textContent = 'ADVANC appropriate for you';
        }
    }
}
const ADVANC = new Advanc();


class Aot {
    constructor(){

    }

    Aot(){
        let isChecked = transport.checked;

        if (linetext.textContent === 'AOT appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked) {
            linetext.textContent = 'AOT appropriate for you';
        }
    }
}
const AOT = new Aot();


class Awc {
    constructor() {

    }

    Awc() {
        let isChecked = transportation.checked;

        if (linetext.textContent === 'AWC appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked && isChecked2 && isChecked3) {
            linetext.textContent = 'AMC appropriate for you';
        }
    }

}
const AWC = new Awc();


class Banpu {
    constructor() {

    }

    Banpu() {
        let isChecked = energy.checked;
        let isChecked2 = utilities.checked;

        if (linetext.textContent === 'BANPU appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked && isChecked2) {
            linetext.textContent = 'BANPU appropriate for you';
        }
    }

}
const BANPU = new Banpu();


class Bdms {
    constructor() {

    }

    Bdms() {
        let isChecked = healthCare.checked;

        if (linetext.textContent === 'BDMS appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked) {
            linetext.textContent = 'BDMS appropriate for you';
        }
    }

}
const BDMS = new Bdms();


class delta {
    constructor() {

    }

    delta() {
        let isChecked = informationTechnology.checked;

        if (linetext.textContent === 'DELTA appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked) {
            linetext.textContent = 'DELTA appropriate for you';
        }
    }

}
const DELTA = new delta();


class Kbank {
    constructor() {

    }

    Kbank() {
        let isChecked = financials.checked;

        if (linetext.textContent === 'KBANK appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked) {
            linetext.textContent = 'KBANK appropriate for you';
        }
    }

}
const KBANK = new Kbank();


class Mint {
    constructor() {

    }

    Mint() {
        let isChecked = communicationService.checked;

        if (linetext.textContent === 'MINT appropriate for you') {
            linetext.textContent = '';
        } else if (isChecked) {
            linetext.textContent = 'MINT appropriate for you';
        }
    }

}
const MINT = new Mint();




button.addEventListener('click', () => {
    COM7.Com7();
    CPALL.Cpall();
    ADVANC.Advanc();
    AOT.Aot();
    AWC.Awc();
    BANPU.Banpu();
    BDMS.Bdms();
    DELTA.delta()
    KBANK.Kbank();
    MINT.Mint();
    hideCheckboxes();
});




//function hideCheckboxes() {
//    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
//        checkbox.classList.add('hidden');
//    });
//}
