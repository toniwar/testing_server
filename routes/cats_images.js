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
    }


];

router.get("/meow", (req, res)=>{
    const num = Math.floor(Math.random()* images.length);
    res.send(images[num]);
})

module.exports = router;