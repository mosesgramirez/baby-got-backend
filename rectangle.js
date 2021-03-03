// "exports" is shorthand for "module.exports", can use if you are only using a particular method of an export
// Node error callbacks - convention is for aync funtions to return an error object as the first param
module.exports = (x, y, cbFunc) => {
    if (x <= 0 || y <= 0) {
        cbFunc(new Error(`Rectangle dimensions ${x}, ${y} must be less than zero.`));
    } else {
        setTimeout(() => cbFunc(null, {
            perimeter: () => 2 * (x + y),
            area: () => x * y
        }), 2000);
    }
}

