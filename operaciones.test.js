const operaciones = require('./operaciones');   

describe('Operaciones', () => {
	test('suma', () => {
		expect(operaciones.suma(2, 3)).toBe(5);
	});

	test('resta', () => {
		expect(operaciones.resta(5, 3)).toBe(2);
	});

	test('multiplicacion', () => {
		expect(operaciones.multiplicacion(2, 3)).toBe(6);
	});

	test('division', () => {
		expect(operaciones.division(6, 3)).toBe(2);
	});

	test('division por cero', () => {
		expect(() => operaciones.division(6, 0)).toThrow('No se puede dividir por cero');
	});
});
