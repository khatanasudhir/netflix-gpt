
export const checkValidData = (email,password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    //const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    //if(!isNameValid) return "Name is not Valid";

    return null;
}