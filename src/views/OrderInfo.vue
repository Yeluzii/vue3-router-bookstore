<template>
    <div>
        <h2>我的订单</h2>
        <ul>
            <li v-for="book in cartBooks" :key="book.id">
                <img :src="book.cover" style="width: 100px; height: auto;" />
                <span>{{ book.title }} - {{ book.author }}</span>
                <span style="margin-left: 10px;">价格: {{ book.price }}元</span>
            </li>
        </ul>
        <p>总价: {{ totalPrice }}元</p>
        <button style="font-size:large;background-color: #ffc400;border: 0;border-radius: 5px;">
            去结算
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// 从 localStorage 获取 cartBooks 数据
const cartBooksString = localStorage.getItem('cartBooks');
const cartBooks = ref(cartBooksString ? JSON.parse(cartBooksString) : []);

interface Book {
    price?: number;
}

// 计算总价
const totalPrice = computed(() => {
    return cartBooks.value.reduce((acc: number, book: Book) => acc + (book.price || 0), 0);
});

defineExpose({ totalPrice });
</script>

<style scoped></style>