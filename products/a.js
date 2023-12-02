let products = {
    data : [
        {
            productName : "Air Jordan 1",
            price : "$150",
            image : "https://shopgiayreplica.com/wp-content/uploads/2020/10/jordan-1-mid-chicago-toe.jpg"
        },
        {
            productName : "Air Jordan 2",
            price : "$180",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-2-retro-chicago-2022_2a9c9d6a3ce548c8990d2faf83079616.png"
        },
        {
            productName : "Air Jordan 3",
            price : "$300",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-3-retro-fire-red-2022_ef39f60eefe9423e874a22c076cf4d86.png"
        },
        {
            productName : "Air Jordan 4",
            price : "$250",
            image : "https://images.prismic.io/sneakql/102da4a3-017b-4fd8-bb9e-89065ddba1ce_86.png?auto=format&ar=1%3A0.6666666666666666&fit=crop&ixlib=react-9.7.0&w=580"
        },
        {
            productName : "Air Jordan 5",
            price : "$160",
            image : "https://images.stockx.com/images/Air-Jordan-5-Retro-Fire-Red-2013-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607663937"
        },
        {
            productName : "Air Jordan 6",
            price : "$150",
            image : "https://shopgiayreplica.com/wp-content/uploads/2023/07/Air-Jordan-6-Retro-Travis-Scott-like-auth.jpg"
        },
        {
            productName : "Air Jordan 7",
            price : "$120",
            image : "https://images.stockx.com/images/Air-Jordan-7-Retro-Pantone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607662998"
        },
        {
            productName : "Air Jordan 8",
            price : "$295",
            image : "https://images.stockx.com/360/Air-Jordan-8-Retro-Aqua-2015/Images/Air-Jordan-8-Retro-Aqua-2015/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1634922909&h=320&q=60"
        },
        {
            productName : "Air Jordan 9",
            price : "$190",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-9-retro-white-gym-red-product_d98ca1173ee049c2a9875089d3d241bc.png"
        },
        {
            productName : "Air Jordan 10",
            price : "$240",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/04/air-jordan-10-retro-red-steel_3e3d15f1d75d468da0e978196fd3c859.png"
        },
        {
            productName : "Air Jordan 11",
            price : "$177",
            image : "https://images.stockx.com/images/Air-Jordan-11-Retro-Cherry-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1669100668"
        },
        {
            productName : "Air Jordan 12",
            price : "$150",
            image : "https://images.stockx.com/360/Air-Jordan-12-Retro-Royalty-Taxi/Images/Air-Jordan-12-Retro-Royalty-Taxi/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1635744340&h=320&q=60"
        },
        {
            productName : "Air Jordan 13",
            price : "$175",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/08/Air-Jordan-13-Retro-Wolf-Grey-1.png"
        },
        {
            productName : "Air Jordan 14",
            price : "$180",
            image : "https://images.stockx.com/360/Air-Jordan-14-Retro-Fire-Red/Images/Air-Jordan-14-Retro-Fire-Red/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1685561436&h=320&q=60"
        },
        {
            productName : "Air Jordan 15",
            price : "$80",
            image : "https://authentic-shoes.com/wp-content/uploads/2023/04/821518_01.jpg_ae1195c0ee9b40f691b69a8ef867b328.png"
        },
        {
            productName : "CREP PROTECT CURE KIT",
            price : "$25",
            image : "https://glab.vn/storage/products/2020/08/05/480x320/5f2a879e76bf6.jpg"
        },
        {
            productName : "CREP PROTECT WIPES",
            price : "$20",
            image : "https://glab.vn/storage/products/2023/06/08/480x320/6481c47807e00.jpg"
        },
        {
            productName : "CREP PROTECT - STARTER PACK",
            price : "$30",
            image : "https://glab.vn/storage/products/2023/06/20/480x320/64916a5e39c4c.jpg"
        },
        {
            productName : "CREP PROTECT CRATES (2 PACK)",
            price : "$30",
            image : "https://glab.vn/storage/products/2020/08/26/480x320/5f460eed94dfb.jpg"
        },
        {
            productName : "AIR JORDAN DRI-FIT LONG WHITE SOCKS",
            price : "$12",
            image : "https://glab.vn/storage/products/2022/04/20/480x320/625fd2191652a.jpg"
        },
        {
            productName : "SUPREME HANES CREW SOCKS WHITE",
            price : "$23",
            image : "https://glab.vn/storage/products/2021/05/12/480x320/609bd0292c7ad.jpg"
        }
    ]
}

for (let i of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText =  i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

console.log(products)