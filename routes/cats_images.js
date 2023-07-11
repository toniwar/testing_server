const exp = require('express');
const router = exp.Router();
const images = [
    {
        id:1,
        url:"https://i.artfile.ru/2880x1800_1005325_[www.ArtFile.ru].jpg"
    },

    {
        id:2,
        url:"https://i.artfile.ru/1600x1200_348447_[www.ArtFile.ru].jpg"
    },

    {
        id:3,
        url:"https://w.forfun.com/fetch/ac/ac0ccbcded7788c9a7005fb8e0e55992.jpeg"
    },

    {
        id:4,
        url:"https://w.forfun.com/fetch/b7/b78fea5ac7f4eca30bb04afe26a90d52.jpeg"
    },

    {
        id:5,
        url:"https://image.winudf.com/v2/image1/Y29tLndhbGxwYXBlci53YWxscGFwZXJzLktpdHRlbnNDYXRzQ3V0ZVdhbGxwYXBlcnNhbmRCYWNrZ3JvdW5kc19zY3JlZW5fMTNfMTU5ODIzNDYxNF8wMDA/screen-5.jpg?fakeurl=1&type=.jpg"
    },

    {
        id:6,
        url:"https://puzzlik.ru/image/cache/catalog/pazly-puzzlik/castorland-puzzle/500-el/pazly-castorland-kotenok-v-sadu-500-el-b-52974-1-1000x1000.jpg"
    },

    {
        id:7,
        url:"https://krasivosti.pro/uploads/posts/2022-05/1653047141_23-krasivosti-pro-p-bolshie-koshki-dikie-krasivo-foto-31.jpg"
    },

    {
        id:8,
        url:"https://sun9-26.userapi.com/impg/8Q2nJS4OqSYfWUcM6zTg-Jn5VEfyOdUUbICyoA/GwTTVrnW2K4.jpg?size=1280x1280&quality=95&sign=83d09eb8aca199a8338afd61186f85a9&c_uniq_tag=8wAgsB3G90InA5wJhA04U_oX4f6NP1JNldlxXfygGWs&type=album"
    },

    {
        id:9,
        url:"https://s1.1zoom.ru/big3/126/Leopards_Big_cats_Glance_478609.jpg"
    },

    {
        id:10,
        url:"https://img2.goodfon.ru/wallpaper/nbig/9/58/tigr-amurskiy-koshka-morda-7705.jpg"
    }


];

router.get("/meow", (req, res)=>{
    const num = Math.floor(Math.random()* images.length);
    res.send(images[num]);
})

module.exports = router;