import { validate } from "../src/CpfModule";

test("Deve validar um CPF", () => {
  const isValid = validate("886.634.854-68");
  expect(isValid).toBe(true);
});

test("Deve validar um CPF válido que termine com zero", () => {
  const isValid = validate("47308766870");
  expect(isValid).toBe(true);
});

test("Deve validar um CPF inválido com todos os dígitos iguais", () => {
  const isValid = validate("111.111.111-11");
  expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com o tamanho menor", () => {
  const isValid = validate("111.111.111-");
  expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com o tamanho maior", () => {
  const isValid = validate("111.111.111-1111");
  expect(isValid).toBe(false);
});
