//This function will format and evaluate the pattern of input mobile number and apply respective actions 
function formatPhoneNumber() {
    let phoneNumberInput = document.getElementById("phoneNumber");
    let phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Replacing the non digits
    let formattedPhoneNumber = '';

    // Formatting the phone number as "123 456 789"
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i == 3 || i == 6) {
            formattedPhoneNumber += ' '; // Add space after every 3 digits
        }
        formattedPhoneNumber += phoneNumber.charAt(i);
    }

    // Updating the input field value with the formatted phone number
    phoneNumberInput.value = formattedPhoneNumber;

    // Applying flow conditions
    let tooltip = document.getElementById("tooltiptoggle");
    let chkov = document.getElementById("img-overlay");
    let inputBorder = document.getElementById("border-container");
    let btn = document.getElementById("submit-button");
    let chkbx = document.getElementById("chkbx");
    if (phoneNumber.length === 9) {
        // Check if all digits are the same using the first digit
        let firstDigit = phoneNumber.charAt(0);
        let allDigitsSame = phoneNumber.split('').every(digit => digit === firstDigit);

        if (allDigitsSame) {
            tooltip.style.visibility = "visible"; //tooltip visibility
            chkov.style.background = "rgba(170,170,170,0.6)"; //tick color
            inputBorder.style.border = "solid 4px red"; //border color red
            btn.disabled = true; //button disable
            btn.style.background = "#555"; //button color
            btn.style.animation = "none"; //button animation
            chkbx.checked = ""; //check box disabled
        } else {
            tooltip.style.visibility = "hidden"; //tooltip hide
            chkov.style.background = "rgba(0,255,0,0.5)"; //tick color green
            inputBorder.style.border = "solid 4px green"; //border color green
            btn.disabled = false; //button enabled
            btn.style.background = "green"; //button color green
            btn.style.animation = "zoomInOut 2s infinite alternate"; //button animation
            btn.style.color = "black"; //text color black
            chkbx.checked= "checked"; //check box enabled
        }
    } else {
        tooltip.style.visibility = "hidden"; //tooltip hide
        chkov.style.background = "rgba(170,170,170,0.6)"; //tick color
        inputBorder.style.border = "solid 4px black"; //border color black
        btn.disabled = true; //button disable
        btn.style.background = "#555"; //button color
        btn.style.animation = "none"; //button animation
        chkbx.checked = ""; //check box disabled
    }
}

// Function to clear input value on focus
function clearInputValue() {
    let inputDefaultValue = document.getElementById("phoneNumber")
    if (inputDefaultValue.value === "Your Number") {
        inputDefaultValue.value = "";
    }
}

// Function to set input value on blur
function setInputDefValue() {
    let inputDefaultValue = document.getElementById("phoneNumber")
    if (!inputDefaultValue.value.trim()) {
        inputDefaultValue.value = "Your Number";
    }
}

// listening event to format the phone number while typing
document.getElementById("phoneNumber").addEventListener("input", formatPhoneNumber);

//listening event to clear input value on focus
document.getElementById("phoneNumber").addEventListener("focus", clearInputValue);

//listening event to set input value on blur
document.getElementById("phoneNumber").addEventListener("blur", setInputDefValue);