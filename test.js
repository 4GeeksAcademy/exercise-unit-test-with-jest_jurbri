const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
let total = sum(14,9);
expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 * 156.5);
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1.07 dollars should be 167.455 yen
})


test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(156.5); // 156.5 yen should be converted back to 1 Euro, then to Pound
    
    expect(pound).toBe( 0.87); // 156.5 yen should be 0.87 pounds
})