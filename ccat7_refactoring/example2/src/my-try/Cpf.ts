export default class Cpf {
  constructor(readonly cpf: string) {}

  hasAValidType(): boolean {
    return (
      this.cpf !== null &&
      this.cpf !== undefined &&
      typeof this.cpf === "string"
    );
  }

  hasAValidSize(): boolean {
    return this.cpf.length >= 11 && this.cpf.length <= 14;
  }

  getOnlyDigits(): string {
    return this.cpf.replace(/\D/g, "");
  }

  isAllDigitsEquals(cpf: string): boolean {
    return cpf.split("").every((c) => c === cpf[0]);
  }

  calculateVerificationDigit(): string {
    const cpfOnlyDigits = this.getOnlyDigits();
    let [
      accumulatorForFirstVerificationDigit,
      accumulatorForSecondVerificationDigit,
    ] = [0, 0];
    for (
      let digitCounter = 1;
      digitCounter < cpfOnlyDigits.length - 1;
      digitCounter++
    ) {
      const digit = parseInt(
        cpfOnlyDigits.substring(digitCounter - 1, digitCounter)
      );
      accumulatorForFirstVerificationDigit =
        accumulatorForFirstVerificationDigit + (11 - digitCounter) * digit;
      accumulatorForSecondVerificationDigit =
        accumulatorForSecondVerificationDigit + (12 - digitCounter) * digit;
    }
    let rest = accumulatorForFirstVerificationDigit % 11;
    const firstVerificationDigit = rest < 2 ? 0 : 11 - rest;
    accumulatorForSecondVerificationDigit += 2 * firstVerificationDigit;
    rest = accumulatorForSecondVerificationDigit % 11;
    const secondVerificationDigit = rest < 2 ? 0 : 11 - rest;

    return "" + firstVerificationDigit + "" + secondVerificationDigit;
  }

  getInformedVerificationDigits() {
    const cpfOnlyDigits = this.getOnlyDigits();
    return cpfOnlyDigits.substring(
      cpfOnlyDigits.length - 2,
      cpfOnlyDigits.length
    );
  }
}
