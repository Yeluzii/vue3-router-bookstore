<template>
    <div>
        <h2>我的购物车</h2>
        <ul>
            <li v-for="item in cartBooks" :key="item.id">
                {{ item.title }} - {{ item.price }}
                <button class="remove" @click="removeFromCart(item)">删除</button>
            </li>
        </ul>
        <router-link to="/cart/order">查看订单信息</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '../router';

// 假设 cartBooks 存储的是 JSON 字符串形式的对象数组
const cartBooks = ref<Record<string, any>[]>([]);

onMounted(() => {
    const storedCartBooks = localStorage.getItem("cartBooks");
    if (storedCartBooks) {
        cartBooks.value = JSON.parse(storedCartBooks);
    }
});

function removeFromCart(item: Record<string, any>) {
    const index = cartBooks.value.findIndex((book) => book.id === item.id);
    if (index !== -1) {
        cartBooks.value.splice(index, 1);
        // 更新 localStorage
        localStorage.setItem("cartBooks", JSON.stringify(cartBooks.value));
        router.go(0);
    }
}
</script>

<style scoped>
.remove {
    margin-top: 10px;
    background-color: #ff0000d7;
    color: black;
    padding: 8px 12px;
    border-radius: 5px;
    border: 0;

    &:hover {
        opacity: 0.8;
        scale: 1.05;
    }
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>