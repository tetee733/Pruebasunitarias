

const isUpperCase= require('../utils/esmayuscula');
test("comprobar Madrid mayuscula", () => {
    expect(isUpperCase("MADRID")).toBe(true)
    })

