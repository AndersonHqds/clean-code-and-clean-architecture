import axios from "axios";

test("Deve simular uma compra", async () => {
  const response = await axios({
    url: "http://localhost:3000/orderPreview",
    method: "post",
    data: {
      cpf: "886.634.854-68",
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 },
      ],
    },
  });
  const output = response.data;
  expect(output.total).toBe(6350);
});
