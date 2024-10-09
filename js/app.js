var homeItems = document.querySelector(".swiper-wrapper");
var popularItems = document.querySelector(".popular-items");
var menuItems = document.querySelector(".menu-items");

var homeSwipperItem = [
    {
        "img": "./images/main.png"
    },
    {
        "img": "./images/pngwing.com (17).png"
    },
    {
        "img": "./images/pngwing.com (7).png"
    }
];
for (let i = 0; i < homeSwipperItem.length; i++) {
    homeItems.innerHTML += `
    <div class="swiper-slide" id="home">
        <div class="main-data">
            <h3>our special dish</h3>
            <h1>fried chicken</h1>
            <p>Lorem ipsum dolor sit,very test food, amet consectetur adipisicing elit?</p>
            <button><a href="#order">order now</a></button>
        </div>
        <div class="main-content">
            <img src="${homeSwipperItem[i].img}" alt="" srcset="">
        </div>
    </div>
`
}

const dishItems = [
    {
        "img": "./images/dishes1.png",
        "price": 121
    },
    {
        "img": "./images/main.png",
        "price": 121
    },
    {
        "img": "./images/pngwing.com (5).png",
        "price": 121
    },
    {
        "img": "./images/pngwing.com (6).png",
        "price": 121
    },
    {
        "img": "./images/pngwing.com (7).png",
        "price": 121
    },
    {
        "img": "./images/pngwing.com (13).png",
        "price": 121
    }

];

for (let i = 0; i < dishItems.length; i++){
    popularItems.innerHTML += `
            <div class="popular-item">
                <img src="${dishItems[i].img}" alt="">
                <h2>tasty food</h2>
                <div class="cart">
                    <span>$${dishItems[i].price}</span>
                    <button class="addBtn">add to cart</button>
                </div>
            </div>
        `
};

const menuSpeacialItems = [
    {
        "img": "./images/pngwing.com (14).png"
    },
    {
        "img": "./images/pngwing.com.png"
    },
    {
        "img": "./images/pngwing.com (12).png"
    },
    {
        "img": "./images/pngwing.com (13).png"
    },
    {
        "img": "./images/pngwing.com (3).png"
    },
    {
        "img": "./images/pngwing.com (15).png"
    }
];

for (let i = 0; i < menuSpeacialItems.length; i++){
    menuItems.innerHTML += `
    <div class="menu-item">
        <img src="${menuSpeacialItems[i].img}" alt="">
        <h2>delicious food</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum unde dignissimos. Deserunt vero ad unde ducimus recusandae, impedit </p>
        <div class="cart">
            <button>add to cart</button>
            <span>$121</span>
        </div>
    </div>
    `
}