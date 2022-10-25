<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue';
import Item from '../entities/Item';
import Order from '../entities/Order';
import ItemService from '../services/ItemService';
import ItemComponent from '../components/ItemComponent.vue';
import OrderComponent from '../components/OrderComponent.vue';

const data = reactive<Record<string, Item[]>>({ items: [] });

const order = reactive(new Order());

// DIP
onMounted(async () => {
  const itemService = inject<ItemService>("itemService");
  if (itemService) {
    data.items = await itemService.getItems();
  }
})
</script>

<template>
  <div class="main">
    <div class="items">
      <div v-for="item of data.items">
        <ItemComponent :order="order" :item="item" />
      </div>
    </div>
    <OrderComponent :order="order" />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

.items {
  display: flex;
  flex-direction: row;
  width: 70%;
}

.order {
  background-color: #CCC;
  width: 30%;
}
</style>
