export const checkValidDataSignIn = (email, password) => {
    const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isValidPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"

    return null;
}

export const checkValidDataSignUp = (name, email, password) => {
    const isValidName = /^[a-zA-Z\u00C0-\u00ff]{2,}(?: [a-zA-Z\u00C0-\u00ff]+){2,20}$/.test(name)
    const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isValidPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isValidName) return "Name is not valid"
    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"

    return null;
}
