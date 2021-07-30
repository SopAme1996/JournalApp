export const viewPassword = () => {
    const checkBox = document.getElementById('viewpassword');
    const inputPassword = document.getElementById('password');
    const eyeImg = document.getElementById('viewEye');
    checkBox.click();

    if (checkBox.checked) {
        inputPassword.type = 'text';
        eyeImg.className = 'far fa-eye'
    } else {
        inputPassword.type = 'password';
        eyeImg.className = 'far fa-eye-slash'
    }
}