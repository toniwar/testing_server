const exp = require('express');
const router = exp.Router()
let products = [
    {
        id: 1,
        title: "Шаурма",
        description: "Еда",
        price: 180.99,
        images: ["https://avatars.dzeninfra.ru/get-zen_doc/1712117/pub_5de76db9ec575b00b19aeb53_5de7b6d8d4f07a00ac1bfaa6/scale_1200"]
    },
    {
        id: 2,
        title: "Кесадилья",
        description: "Еда",
        price: 200.0,
        images: ["https://kulinaria1914.ru/800/600/https/i2.wp.com/www.hispanicfoodnetwork.com/wp-content/uploads/2016/10/Chicken-Quesadilla-Recipe-1.jpg?fit=4156%2C2338"]
    },
    {
        id: 3,
        title: "Бургер",
        description:"Еда",
        price: 130.0,
        images:["https://madcanon.ru/wp-content/uploads/2022/06/burger.jpg"]

    },
    {
        id: 4,
        title: "Пельмени",
        description:"Еда",
        price: 249.99,
        images:["https://attuale.ru/wp-content/uploads/2017/09/28136_5.jpg"]

    },
    {
        id: 5,
        title: "Игрушка \"Сиреноголовый\"",
        description:"Товары для детей",
        price: 450.00,
        images:["https://cdn1.ozone.ru/s3/multimedia-a/6083517490.jpg"]

    }


    
];

router.get("/products", (req, res)=>{
    res.send(products);
})
module.exports = router