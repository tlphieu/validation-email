const { isValidEmail } = require('./validation');

describe('Email Validation', () => {

    test('TC01: Valid email', () => {
        expect(isValidEmail('student@gmail.com')).toBe(true);
    });

    test('TC02: Missing @', () => {
        expect(isValidEmail('student')).toBe(false);
    });

    test('TC03: Missing domain', () => {
        expect(isValidEmail('student@')).toBe(false);
    });

    test('TC04: Missing domain extension', () => {
        expect(isValidEmail('student@gmail')).toBe(false);
    });

    test('TC05: Empty email', () => {
        expect(isValidEmail('')).toBe(false);
    });

});
// console.log(regex.test("student@gmail.com")); // true
// console.log(regex.test("student@gmail"));     // false
// console.log(regex.test("student@"));          // false
// console.log(regex.test("student gmail.com")); // false
/// aaa@gmail.com