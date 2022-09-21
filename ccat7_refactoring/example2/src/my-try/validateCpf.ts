import Cpf from "./Cpf";

// @ts-nocheck

export function validateCpf(cpf: Cpf) {
  if (!cpf.hasAValidType()) return false;
  if (!cpf.hasAValidSize()) return false;
  const cpfOnlyDigits = cpf.getOnlyDigits();
  if (cpf.isAllDigitsEquals(cpfOnlyDigits)) return false;

  return (
    cpf.getInformedVerificationDigits() === cpf.calculateVerificationDigit()
  );
}
