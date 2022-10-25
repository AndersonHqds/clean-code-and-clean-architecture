import Item from "../entities/Item";
import Order from "../entities/Order";
import { mount } from "@vue/test-utils";
import CheckoutView from "../views/CheckoutView.vue";
import ItemService from "../services/ItemService";

function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

test("Deve testar a view de checkout", async function () {
  const itemService: ItemService = {
    async getItems(): Promise<Item[]> {
      return [{ idItem: 1, description: "Baixo", price: 2000 }];
    },
  };
  const wrapper = mount(CheckoutView, {
    global: {
      provide: {
        itemService,
      },
    },
  });
  await sleep(100);
  expect(wrapper.get(".item-description").text()).toBe("Baixo");
  expect(wrapper.get(".item-price").text()).toBe("2000");
  await wrapper.get(".add-button").trigger("click");
  await wrapper.vm.$forceUpdate();
  expect(wrapper.get(".total").text()).toBe("2000");
});
