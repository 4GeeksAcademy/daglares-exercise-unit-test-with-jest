const { sum } = require("./app.js");

// One euro is:
let oneEuroIs = {
  JPY: 156.5, // japan yen
  USD: 1.07, // us dollar
  GBP: 0.87, // british pound
};

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
  // Importo la funcion desde app.js
  const { fromEuroToDollar } = require("./app.js");

  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  // Hago mi comparación (la prueba)
  expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("1 dollar should be 146.2616... yenes", function () {
  const { fromDollarToYen } = require("./app.js");

  const yenes = fromDollarToYen(3.5);

  const expected = (3.5 / oneEuroIs["USD"]) * oneEuroIs["JPY"];

  expect(fromDollarToYen(3.5)).toBe(
    (3.5 / oneEuroIs["USD"]) * oneEuroIs["JPY"]
  );
});

test("1 yen should be 0.00555... pounds", function () {
    const { fromYenToPound } = require("./app.js");
  
    const yenes = fromYenToPound(3.5);
  
    const expected = (3.5 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
  
    expect(fromYenToPound(3.5)).toBe(
      (3.5 / oneEuroIs["JPY"]) * oneEuroIs["GBP"]
    );
  });
