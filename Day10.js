const check = email => {
    const same = /^\w+([\_-]?\w+)*@\w*(\.\w{2,3})+$/
    same.test(email) ? console.log(true) : console.log(false)
}
check("udojyk@gmail.com")