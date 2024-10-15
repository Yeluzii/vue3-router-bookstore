<template>
    <div v-if="book">
        <h2>书名：{{ book.title }}</h2>
        <button class="addCart" @click="addCart">加入购物车</button>
        <p>作者：{{ book.author }}</p>
        <p>价格：{{ book.price }}</p>
        <p>介绍：{{ book.introduction }}</p>
        <img class="cover" :src="book.cover" />
    </div>
    <div v-else>
        <p>出现了一些错误</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";


const route = useRoute();
// 接收到路由中的 id 参数
const bookId = route.params.id;

const books = [
    {
        id: 1,
        title: "刑法学讲义",
        author: "罗翔",
        price: 45,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151530984.jpg",
        introduction: "《刑法学讲义》是《刑法》的实践应用，以《刑法》为理论基础，结合实践案例，对刑法的实践应用进行深入、系统、全面的分析与讨论。",
    },
    {
        id: 2,
        title: "红楼梦",
        author: "曹雪芹",
        price: 80,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151531308.jpg",
        introduction: "《红楼梦》是中国四大名著之一，是世界上最早的长篇爱情小说。",
    },
    {
        id: 3,
        title: "三国演义",
        author: "罗贯中",
        price: 60,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151544545.jpg",
        introduction: "《三国演义》是中国四大名著之一",
    },
    {
        id: 4,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        price: 50,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152048487.jpg",
        introduction: "《百年孤独》是魔幻现实主义文学的代表作，讲述了布恩迪亚家族七代人的故事。"
    },
    {
        id: 5,
        title: "水浒传",
        author: "施耐庵",
        price: 70,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049157.jpg",
        introduction: "《水浒传》是中国四大名著之一，讲述了宋江领导的梁山好汉反抗腐败官僚的故事。"
    },
    {
        id: 6,
        title: "西游记",
        author: "吴承恩",
        price: 90,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049483.jpg",
        introduction: "《西游记》是中国四大名著之一，讲述了唐僧师徒四人西天取经的传奇故事。"
    },
    {
        id: 7,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        price: 100,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152048487.jpg",
        introduction: "《百年孤独》是魔幻现实主义文学的代表作，讲述了布恩迪亚家族七代人的故事。"
    },
    {
        id: 8,
        title: "追风筝的人",
        author: "卡勒德·胡赛尼",
        price: 50,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049760.jpg",
        introduction: "《追风筝的人》是一部描绘阿富汗历史背景和人性救赎的小说。"
    },
    {
        id: 9,
        title: "解忧杂货店",
        author: "东野圭吾",
        price: 65,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050968.jpg",
        introduction: "《解忧杂货店》是一部温馨治愈的小说，讲述了一个神秘杂货店帮助人们解决烦恼的故事。"
    },
    {
        id: 10,
        title: "活着",
        author: "余华",
        price: 55,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050678.jpg",
        introduction: "《活着》是一部描绘中国农民在动荡年代生存挣扎的小说。"
    },
    {
        id: 11,
        title: "三体",
        author: "刘慈欣",
        price: 120,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050781.jpg",
        introduction: "《三体》是中国科幻小说的里程碑，讲述了人类文明与三体文明的首次接触。"
    },
    {
        id: 12,
        title: "白夜行",
        author: "东野圭吾",
        price: 75,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050682.jpg",
        introduction: "《白夜行》是一部悬疑小说，讲述了两个因命运交织而走上不同道路的人的故事。"
    },
    {
        id: 13,
        title: "挪威的森林",
        author: "村上春树",
        price: 60,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152051544.jpg",
        introduction: "《挪威的森林》是一部描绘青春成长和爱情的小说。"
    }
];

// 查找 id 为bookId 的文章
const book = books.find(a => a.id === Number(bookId));

// 用于存储购物车中的书籍
let cartBooks = JSON.parse(localStorage.getItem("cartBooks") || "[]");

const addCart = () => {
    cartBooks.push(book);
    localStorage.setItem("cartBooks", JSON.stringify(cartBooks));
    if (book) {
        alert(book.title + "添加成功");
    } else {
        alert("添加失败");
    }
};

</script>

<style scoped>
.addCart {
    margin-top: 10px;
    background-color: #ffc400;
    color: black;
    padding: 8px 12px;
    border-radius: 5px;
    border: 0;

    &:hover {
        opacity: 0.8;
        scale: 1.05;
    }
}

.cover {
    width: 300px;
    height: 400px;
    object-fit: cover;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>