const $ = (value) => {
    return document.getElementById(value)
}

const getbyName = (value) => {
    return document.getElementsByName(value)
}

const registerBtn = $('registerBtn')

//disable loading
registerBtn.setAttribute('disabled','')

registerBtn.addEventListener('click', () => {
    //validate email input
    const emailInput = $('emailInput');
    console.log(emailInput.value)
    if(emailInput.value.indexOf('@') === -1 ) {
        const emailMsg = $('emailMsg')
        emailMsg.innerHTML = "<span class='text-danger'>Your email is invalid</span>"
    } else {
        const emailMsg = $('emailMsg')
        emailMsg.innerHTML = "<span class='text-success'>You right!</span>"
    }

    //validate phone input
    const phoneInput = $("phoneInput")
    const phoneValue = phoneInput.value
    const regExpPattern = /^([\+][\d]{2})?([\d]{3})-([\d]{3})-([\d]{3})$/

    if(!regExpPattern.test(phoneValue)) {
        $('phoneMsg').innerHTML = "<span class='text-danger'>Your phone is invalid</span>"
    } else {
        $('phoneMsg').innerHTML = "<span class='text-success'>correct!</span>"
    }

    //validate country
    const countrySelect = $('countrySelect')
    const countryObj = {
        0 : "Nothing",
        1 : "VietNam",
        2 : "Singapore",
        3 : "ThaiLand",
    }

    if (countrySelect.value === "0") {
        $('countryMsg').innerHTML = "<span class=\'text-danger\'>Please select one of 3</span>"
    } else {
        $('countryMsg').innerHTML = (`<span class=\'text-success\'>You select option : ${countryObj[countrySelect.value]}</span>`)
    }

    //validate contact
    const contactRadioGroup = getbyName("contactRadioGroup")

    contactRadioGroup.forEach((element) => {
        if (element.checked) {
            $('contactMsg').innerHTML = (`<span class="text-success">You select option ${element.value}<span>`)
        }
    })

    //validate checked
    // const acceptCheckbox = $('acceptCheckbox')
    // if (!acceptCheckbox.checked) {
    //     regExpPattern.removeAttribute('disabled')
    // }
})

// listen event check 
const acceptCheckbox = $('acceptCheckbox')

acceptCheckbox.addEventListener('click', () => {
    if(acceptCheckbox.checked) {
        registerBtn.removeAttribute('disabled')
    }

    if(!acceptCheckbox.checked) {
        registerBtn.setAttribute('disabled','')
    }
})

//listen event reset
const resetBtn = $('resetBtn')
const textradio = $('textRadio')

resetBtn.addEventListener('click',() => {
    $('registrationForm').reset()
    // $('emailInput').value = ""
    // $('phoneInput').value = ""
    // $('countrySelect').value = "0"
    // $('textradio').value = "Text"
    $('emailMsg').innerHTML=""
    $('phoneMsg').innerHTML=""
    $('countryMsg').innerHTML=""
    $('contactMsg').innerHTML=""
})