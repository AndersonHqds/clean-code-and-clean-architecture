import Cpf from "../src/Cpf";

const validCpfs = ["886.634.854-68", "47308766870"];
test.each(validCpfs)("Deve validar um CPF", (validCpf) => {
  const cpf = new Cpf(validCpf);
  expect(cpf).toBeDefined();
  expect(cpf.getValue()).toBe(validCpf);
});

const CpfsWithSameDigits = [
  "111.111.111-11",
  "222.222.222-22",
  "333.333.333-33",
];

test.each(CpfsWithSameDigits)(
  "Deve validar um CPF inválido com todos os dígitos iguais",
  (cpf) => {
    expect(() => new Cpf(cpf)).toThrow(new Error("Cpf Inválido"));
  }
);

test("Deve validar um CPF inválido com o tamanho menor", () => {
  expect(() => new Cpf("111.111.111-")).toThrow(new Error("Cpf Inválido"));
});

test("Deve validar um CPF inválido com o tamanho maior", () => {
  expect(() => new Cpf("111.111.111-1111")).toThrow(new Error("Cpf Inválido"));
});

test("Deve validar um CPF vazio", () => {
  expect(() => new Cpf("")).toThrow(new Error("Cpf Inválido"));
});
