const $ = (ele) => {
    return document.getElementById(ele)
}

const getName = (ele) => {
    return document.getElementsByName(ele)
}

document.getElementById('submitBtn').addEventListener('click', () => {
    //fullName
    const nameInput = $('nameInput')
    const nameMsg = $('nameMsg')
    const getSuccess = "<span class ='text-success'>Good job!</span>"
    const regExpName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/
    if (nameInput.value === "") {
        nameMsg.innerHTML = "<span class ='text-danger'>This field is required.</span>"
    } else if (regExpName.test(nameInput.value)) { 
        nameMsg.innerHTML = "<span class ='text-danger'>Your full name is invalid.</span>"
    } else {
        nameMsg.innerHTML = getSuccess
    }

    // email 
    const emailInput = $('emailInput')
    const regExpEmail = /^[a-z][A-Z]+@edu\.com\.vn$/
    const falEmail = emailInput.value.indexOf('@')
    const emailMsg = $('emailMsg')

    if (emailInput.value === "") {
        emailMsg.innerHTML = "<span class ='text-danger'>This field is required.</span>";
    } else if ( falEmail === -1 || falEmail === 0 || falEmail === emailInput.value[length-1]) {
        emailMsg.innerHTML = "<span class ='text-danger'>Your email is invalid. Please correct your email.</span>"
    } else {
        emailMsg.innerHTML = getSuccess
    }

    

    //text
    const textMsg = $('textMsg')
    if ($('textArea').value === "") {
        textMsg.innerHTML = `<span class="text-danger">This field is required</span>`
    } else {
        textMsg.innerHTML = ""
    }

    // favourite
    const spCBox = getName('sport')
    const sportMsg = $('sportMsg')
    const arr = []

    spCBox.forEach((ele) => {
        arr.push(ele.checked)
        if (arr.indexOf(true) === -1) {
            sportMsg.innerHTML = `<span class ='text-danger'>You should select at least one option.</span>`
        } else {
            sportMsg.innerHTML = ""
        }
    })
    
    //validate all

    if (
        nameMsg.innerHTML === getSuccess &&
        emailMsg.innerHTML === getSuccess &&
        sportMsg.innerHTML === "" &&
        textMsg.innerHTML === ""
    ) {
        alert("Sent data! We will contact you as soon as possible")
    }
})

//reset

const resetBtn = $('resetBtn')
resetBtn.addEventListener('click', () => {
    $('validateForm').reset();
    $("nameMsg").innerHTML = "";
    $("emailMsg").innerHTML = "";
    $("sportMsg").innerHTML = "";
    $("textMsg").innerHTML = "";
      
  })


