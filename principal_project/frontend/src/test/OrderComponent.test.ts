import Item from "../entities/Item";
import Order from "../entities/Order";
import { mount } from "@vue/test-utils";
import OrderComponent from "../components/OrderComponent.vue";
test("Deve testar o componente de pedido", async function () {
  const order = new Order();
  order.addItem(new Item(1, "Guitarra", 1000));
  order.addItem(new Item(1, "Guitarra", 1000));
  order.addItem(new Item(2, "Amplificador", 5000));
  const wrapper = mount(OrderComponent, {
    props: {
      order,
    },
  });
  expect(wrapper.get(".total").text()).toBe("7000");
  await wrapper.get(".delete-order-item").trigger("click");
  expect(wrapper.get(".total").text()).toBe("6000");
});
