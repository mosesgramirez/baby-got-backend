const rect = (x, y, cbFunc) => {
    if (x <= 0 || y <= 0) {
        cbFunc(new Error(`Rectangle dimensions ${x}, ${y} must be less than zero.`));
    } else {
        setTimeout(() => cbFunc(null, {
            perimeter: () => 2 * (x + y),
            area: () => x * y
        }), 2000);
    }
};

export default rect;