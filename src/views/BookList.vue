<template>
    <div>
        <h2>书籍列表</h2>
        <div class="book-list">
            <div v-for="book in books" :key="book.id" class="book-item">
                <router-link :to="`/book/${book.id}`">
                    <img class="cover" :src="book.cover" />
                    <p>
                        {{ book.id }}.
                        {{ book.title }}
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const books = [
    {
        id: 1,
        title: "刑法学讲义",
        author: "罗翔",
        price: 45,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151530984.jpg",
    },
    {
        id: 2,
        title: "红楼梦",
        author: "曹雪芹",
        price: 80,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151531308.jpg",
    },
    {
        id: 3,
        title: "三国演义",
        author: "罗贯中",
        price: 60,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410151544545.jpg",
    },
    {
        id: 4,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        price: 50,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152048487.jpg",
    },
    {
        id: 5,
        title: "水浒传",
        author: "施耐庵",
        price: 70,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049157.jpg",
    },
    {
        id: 6,
        title: "西游记",
        author: "吴承恩",
        price: 90,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049483.jpg",
    },
    {
        id: 7,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        price: 100,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152048487.jpg",
    },
    {
        id: 8,
        title: "追风筝的人",
        author: "卡勒德·胡赛尼",
        price: 50,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152049760.jpg",
    },
    {
        id: 9,
        title: "解忧杂货店",
        author: "东野圭吾",
        price: 65,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050968.jpg",
    },
    {
        id: 10,
        title: "活着",
        author: "余华",
        price: 55,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050678.jpg",
    },
    {
        id: 11,
        title: "三体",
        author: "刘慈欣",
        price: 120,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050781.jpg",
    },
    {
        id: 12,
        title: "白夜行",
        author: "东野圭吾",
        price: 75,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152050682.jpg",
    },
    {
        id: 13,
        title: "挪威的森林",
        author: "村上春树",
        price: 60,
        cover: "https://yeluzi-pic-go.oss-cn-hangzhou.aliyuncs.com/md/202410152051544.jpg",
    }
];

</script>

<script lang="ts">

</script>

<style scoped>
.book-list {
    display: flex;
    /* 使用弹性布局 */
    flex-wrap: wrap;
}

.book-item {
    flex: 0 0 33%;
    box-sizing: border-box;
    /* 包含边距和边框 */
}

.cover {
    width: 150px;
    /* 图片宽度占满整个父元素 */
    height: 200px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
    border: #111 1px solid;

    &:hover {
        box-shadow: 5px 5px 10px #ffc400;
        opacity: 0.8;
        scale: 1.1;
    }
}

a {
    color: #3977fc;
    text-decoration: none;

    &:hover .cover {
        box-shadow: 5px 5px 10px #ffc400;
        opacity: 0.8;
        scale: 1.1;
    }
}
</style>