


export const checkValidData = (isSignInForm, fullName, email, password) => {
    if (!isSignInForm) {
        // Validate fullName only if not signing in
        const isValidName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})$/.test(fullName);
        if (!isValidName) return "Name is not valid";
    }

    // Always validate email
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (!isEmailValid) return "Email is not valid";

    // Always validate password
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isPasswordValid) return "Password is not valid";

    return null;
};












