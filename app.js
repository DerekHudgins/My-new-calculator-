// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const AddImputEl1 = document.getElementById ('add-imput-El1');
const AddImputEl2 = document.getElementById ('add-imput-El2');
const AddButton = document.getElementById ('add-button');
const AddResult = document.getElementById ('add-result');

AddButton.addEventListener('click', () =>{
    const number1 = AddImputEl1.value;
    const number2 = AddImputEl2.value;
    const sum = Number(number1) + Number(number2);
    AddResult.textContent = sum;
    
});

const SubImputEl1 = document.getElementById ('sub-imput-El1');
const SubImputEl2 = document.getElementById ('sub-imput-El2');
const SubButton = document.getElementById ('sub-button');
const SubResult = document.getElementById ('sub-result');

SubButton.addEventListener('click', () =>{
    const number1 = SubImputEl1.value;
    const number2 = SubImputEl2.value;
    const diference = Number(number1) - Number(number2);
    SubResult.textContent = diference;
    
});
const MulImputEl1 = document.getElementById ('mul-imput-El1');
const MulImputEl2 = document.getElementById ('mul-imput-El2');
const MulButton = document.getElementById ('mul-button');
const MulResult = document.getElementById ('mul-result');

MulButton.addEventListener('click', () =>{
    const number1 = MulImputEl1.value;
    const number2 = MulImputEl2.value;
    const Multiplication = Number(number1) * Number(number2);
    MulResult.textContent = Multiplication;
    
});
const DivImputEl1 = document.getElementById ('div-imput-El1');
const DivImputEl2 = document.getElementById ('div-imput-El2');
const DivButton = document.getElementById ('div-button');
const DivResult = document.getElementById ('div-result');

DivButton.addEventListener('click', () =>{
    const number1 = DivImputEl1.value;
    const number2 = DivImputEl2.value;
    const Division = Number(number1) / Number(number2);
    DivResult.textContent = Division;
    
});