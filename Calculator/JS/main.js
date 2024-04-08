//Create an object to keep track of the values
const Calculator = {
    Display_Value: "0",
    first_operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//This changes the values every time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //Checks if the Wait_Second_Operand variable is true and sets it
    //Display_Value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
    //This overrides Display_Value if the current value is 0. Otherwise,
    // concatenate the value
    Calculator.Display_Value = Display_Value === '0'? digit: Display_Value + digit;
    }
}

//This section deals with decimal points
function Input_Decimal (dot) {
    if (Calculator.Wait_Second_Operand == 'true') return;
    if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
    }
}

//This section deals with operators
function Handle_Operator (Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator exists and if wait_Second_Operand is true
    //Then update the operator and exit the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation [operator] (Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        //This will remove any result
        result = (result * 1).toString();
        Calculator.Display_Value = result;
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//Handles the actual calculations
const Perform_Calculation = {
'/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
'*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
"+": (first_operand, second_operand) => first_operand + second_operand,
'-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
'=': (First_Operand, Second_Operand) => Second_Operand
};

//Reset the calculator when the AC button is pressed
function Calculator_Reset() {
    Calculator. Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator= null;
}

//This function updates the calculator screen with the contents of the Display function
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator. Display_Value;
}

Update_Display();

//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const{target} = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator (target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})