function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function isValidPhone(phone) {

//     return /^0[35789][0-9]{8}$/.test(phone);

// }
module.exports = { isValidEmail };

// isValidPhone("0912345678"); // true
// isValidPhone("0812345678"); // true
// isValidPhone("123456");     // false
// isValidPhone("abcdefghij"); // false
//https://github.com/tlphieu/validation-email