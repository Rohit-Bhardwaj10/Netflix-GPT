export const Validate=(email,password)=>{
    
    const emailCheck=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const passwordCheck=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    console.log(emailCheck);
    console.log(passwordCheck);
    
    
    if(!emailCheck) return "Invalid Email Address!!"
    if(!passwordCheck) return "Invalid Password!!"

    return null
}