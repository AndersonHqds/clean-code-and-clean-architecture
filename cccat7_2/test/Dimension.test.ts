import Dimension from "../src/Dimension";

test("Não deve ter largura dimensões negativas", () => {
  expect(() => new Dimension(-1, 0, 0, 0)).toThrow(
    new Error("Invalid dimensions")
  );
});

test("Não deve ter altura dimensões negativas", () => {
  expect(() => new Dimension(0, -1, 0, 0)).toThrow(
    new Error("Invalid dimensions")
  );
});

test("Não deve ter profundidade dimensões negativas", () => {
  expect(() => new Dimension(0, 0, -1, 0)).toThrow(
    new Error("Invalid dimensions")
  );
});

test("Não deve ter peso dimensões negativas", () => {
  expect(() => new Dimension(0, 0, 0, -1)).toThrow(
    new Error("Invalid dimensions")
  );
});
