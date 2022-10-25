import axios from "axios";

test("Deve obter um item da api", async () => {
  const response = await axios({
    url: "http://localhost:3004/items/1",
    method: "get",
  });
  const output = response.data;
  expect(output.description).toBe("Guitarra");
  expect(output.price).toBe(1000);
  expect(output.volume).toBe(0.03);
});
