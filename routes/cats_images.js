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
        url:"https://zaebov.net/wp-content/uploads/2021/01/995/34.jpg"
    },

    {
        id:8,
        url:"https://sport-dog.ru/wp-content/uploads/b/9/4/b94464b34f9547ea4edf2e29dab84a92.jpeg"
    },

    {
        id:9,
        url:"https://pic.rutubelist.ru/video/ce/dd/cedd6d2ea054513ed268cdf693228a43.jpg"
    },

    {
        id:10,
        url:"https://krot.info/uploads/posts/2022-03/1646873271_36-krot-info-p-zabavnie-koti-i-koshki-smeshnie-foto-38.jpg"
    },

    {
        id:11,
        url:"https://pic.rutubelist.ru/video/4b/3d/4b3dfea19edcbdc2fa9093eebef7847f.jpg"
    },

    {
        id:12,
        url:"https://otkritkis.com/wp-content/uploads/2022/02/2681344070.jpg"
    },

    {
        id:13,
        url:"https://i.yapx.cc/QPdAf.jpg"
    },

    {
        id:14,
        url:"https://zaebov.net/wp-content/uploads/2021/01/995/24.jpg"
    },

    {
        id:15,
        url:"https://zaebov.net/wp-content/uploads/2021/01/995/22.jpg"
    },

    {
        id:16,
        url:"https://gamerwall.pro/uploads/posts/2022-09/1662463393_25-gamerwall-pro-p-ochen-smeshnoi-kot-krasivo-33.jpg"
    },

    {
        id:17,
        url:"https://avatars.dzeninfra.ru/get-zen_doc/1584893/pub_5d1e7be5edee3600ad201b4b_5d1e7c99d6b87700ae7ca913/scale_1200"
    },
    
    {
        id:18,
        url:"https://fanibani.ru/wp-content/uploads/2021/07/top3000d.jpg"
    }


];

let lastNum;
let currentNum;

router.get("/meow", (req, res)=>{
    res.send(images[getRandom()]);
})

function getRandom(){
    currentNum = Math.floor(Math.random() * images.length);
    if(currentNum == lastNum) getRandom();
    else{
        lastNum = currentNum
        return currentNum;
    } 
}

module.exports = router;