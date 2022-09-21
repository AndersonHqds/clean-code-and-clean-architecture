import Cpf from "../../src/my-try/Cpf";
import { validateCpf } from "../../src/my-try/validateCpf";

test("should validate a valid cpf correctly", () => {
  const cpf = new Cpf("541.144.490-00");
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(true);
});

test("should validate a invalid cpf correctly", () => {
  const cpf = new Cpf("541.144.490-02");
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(false);
});

test("should validate a invalid cpf with four characters", () => {
  const cpf = new Cpf("478");
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(false);
});

test("should validate a invalid cpf with empty characters", () => {
  const cpf = new Cpf("");
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(false);
});

test("should validate a invalid cpf with numeric value", () => {
  const cpf = new Cpf(12 as unknown as string);
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(false);
});

test("should validate a invalid cpf with null value", () => {
  const cpf = new Cpf(null!);
  const isAValidCpf = validateCpf(cpf);
  expect(isAValidCpf).toBe(false);
});
