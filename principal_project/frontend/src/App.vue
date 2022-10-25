<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue';
import Item from './entities/Item';
import Order from './entities/Order';
import ItemService from './services/ItemService';
import CheckoutView from './views/CheckoutView.vue';

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
  <router-view></router-view>
</template>

<style scoped>

</style>
