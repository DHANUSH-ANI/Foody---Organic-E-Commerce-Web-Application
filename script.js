// Language
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_features: "Features",
        nav_products: "Products",
        nav_contact: "Contact Us",
        login_text: "Login",
        hero_title: "Organic Food Is Good For Health",
        hero_sub: "Fresh vegetables, fruits, and groceries delivered directly from local farms to your home at the best prices in Indian Rupees.",
        btn_products: "Products",
        btn_services: "About Us",
        about_title: "Best Organic Fruits And Vegetables",
        about_desc: "We provide 100% natural, farm-fresh organic foods without any harmful chemicals. Healthy eating starts with clean and fresh ingredients.",
        about_p1: "100% Natural and Fresh Farm Products",
        about_p2: "No Chemical Fertilizers or Pesticides",
        about_p3: "Affordable Student & Family Friendly Prices in ₹",
        btn_shop: "Shop Now",
        feat_title: "Our Features",
        feat_sub: "Why customers trust our organic store for daily groceries.",
        f1_title: "Natural Process",
        f1_desc: "Grown naturally in rich soil using traditional farming methods.",
        f2_title: "Organic Products",
        f2_desc: "Handpicked fresh items checked daily for high quality.",
        f3_title: "Biologically Safe",
        f3_desc: "Safe and nutritious food for your everyday healthy lifestyle.",
        prod_title: "Our Products",
        prod_sub: "Fresh groceries fetched using JavaScript API with Indian Rupee (₹) prices.",
        cat_all: "All",
        cat_veg: "Vegetable",
        cat_fruit: "Fruits",
        cat_fresh: "Fresh",
        test_title: "Customer Review",
        test_sub: "What our regular customers say about our quality.",
        footer_desc: "Fresh and organic farm products delivered directly to your kitchen.",
        footer_addr: "Address",
        footer_links: "Quick Links",
        footer_news: "Newsletter",
        cart_title: "Your Shopping Cart",
        total_text: "Total Amount:",
        checkout_btn: "Place Order"
    },
    ta: {
        nav_home: "முகப்பு",
        nav_about: "எங்களைப் பற்றி",
        nav_features: "சிறப்பம்சங்கள்",
        nav_products: "பொருட்கள்",
        nav_contact: "தொடர்புக்கு",
        login_text: "உள்நுழைய",
        hero_title: "இயற்கை உணவு ஆரோக்கியத்திற்கு சிறந்தது",
        hero_sub: "புதிய காய்கறிகள், பழங்கள் மற்றும் மளிகைப் பொருட்கள் நேரடியாக உங்கள் இல்லத்திற்கு இந்திய ரூபாய் விலையில் வழங்கப்படுகின்றன.",
        btn_products: "பொருட்கள்",
        btn_services: "எங்களைப் பற்றி",
        about_title: "சிறந்த இயற்கை பழங்கள் மற்றும் காய்கறிகள்",
        about_desc: "எந்தவொரு இரசாயனமும் இல்லாமல் 100% இயற்கை உணவுகளை நாங்கள் வழங்குகிறோம்.",
        about_p1: "100% இயற்கை மற்றும் புதிய பண்ணை பொருட்கள்",
        about_p2: "இரசாயன உரங்கள் அல்லது பூச்சிக்கொல்லிகள் இல்லை",
        about_p3: "குறைந்த விலையில் தரமான பொருட்கள் (₹)",
        btn_shop: "இப்போது வாங்க",
        feat_title: "எங்கள் சிறப்பம்சங்கள்",
        feat_sub: "வாடிக்கையாளர்கள் எங்கள் இயற்கை அங்காடியை ஏன் விரும்புகிறார்கள்.",
        f1_title: "இயற்கை முறை",
        f1_desc: "பாரம்பரிய விவசாய முறைகளைப் பயன்படுத்தி இயற்கையாக வளர்க்கப்படுகிறது.",
        f2_title: "ஆர்கானிக் பொருட்கள்",
        f2_desc: "தினசரி தரம் சரிபார்க்கப்படும் புதிய பொருட்கள்.",
        f3_title: "பாதுகாப்பான உணவு",
        f3_desc: "ஆரோக்கியமான வாழ்க்கை முறைக்கு ஏற்ற பாதுகாப்பான உணவு.",
        prod_title: "எங்கள் பொருட்கள்",
        prod_sub: "இந்திய ரூபாய் (₹) விலையில் புதிய இயற்கை பொருட்கள்.",
        cat_all: "அனைத்தும்",
        cat_veg: "காய்கறிகள்",
        cat_fruit: "பழங்கள்",
        cat_fresh: "புதியவை",
        test_title: "வாடிக்கையாளர் கருத்து",
        test_sub: "எங்கள் தரத்தைப் பற்றி வாடிக்கையாளர்கள் கூறுவது.",
        footer_desc: "புதிய மற்றும் இயற்கை பண்ணை பொருட்கள்.",
        footer_addr: "முகவரி",
        footer_links: "விரைவு இணைப்புகள்",
        footer_news: "செய்திமடல்",
        cart_title: "உங்கள் கூடை",
        total_text: "மொத்த தொகை:",
        checkout_btn: "ஆர்டர் செய்"
    }
};

// Products
let allProducts = [];
let cart = [];
let currentCategory = "all";

const customProduce = [
    {
        id: 1,
        name: "Fresh Organic Tomato (1 kg)",
        category: "Vegetable",
        price: 45,
        oldPrice: 60,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
        desc: "Farm fresh red organic tomatoes rich in vitamins."
    },
    {
        id: 2,
        name: "Kashmir Fresh Apples (1 kg)",
        category: "Fruits",
        price: 160,
        oldPrice: 190,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
        desc: "Crisp and sweet apples directly from orchards."
    },
    {
        id: 3,
        name: "Organic Green Cucumber (500 g)",
        category: "Vegetable",
        price: 35,
        oldPrice: 50,
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80",
        desc: "Cool and crunchy green cucumbers for salads."
    },
    {
        id: 4,
        name: "Fresh Strawberries (250 g)",
        category: "Fruits",
        price: 120,
        oldPrice: 150,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
        desc: "Sweet handpicked organic red strawberries."
    },
    {
        id: 5,
        name: "Farm Fresh Potatoes (1 kg)",
        category: "Vegetable",
        price: 40,
        oldPrice: 55,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
        desc: "Clean, chemical-free potatoes for everyday cooking."
    },
    {
        id: 6,
        name: "Organic Robusta Bananas (1 Dozen)",
        category: "Fruits",
        price: 65,
        oldPrice: 80,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
        desc: "Naturally ripened healthy yellow bananas."
    },
    {
        id: 7,
        name: "Pure Wild Forest Honey (500 g)",
        category: "Fresh",
        price: 240,
        oldPrice: 290,
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=600&q=80",
        desc: "100% pure unrefined organic honey."
    },
    {
        id: 8,
        name: "Fresh Green Broccoli (1 pc)",
        category: "Vegetable",
        price: 75,
        oldPrice: 95,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
        desc: "High protein and vitamin rich green broccoli."
    }
];

async function fetchProductsFromAPI() {
    try {
        const response = await fetch("https://dummyjson.com/products/category/groceries?limit=8");
        const data = await response.json();

        if (data && data.products) {
            allProducts = customProduce.map((item, index) => {
                const apiItem = data.products[index];
                return {
                    ...item,
                    desc: apiItem ? apiItem.description : item.desc
                };
            });
        } else {
            allProducts = customProduce;
        }
    } catch (error) {
        allProducts = customProduce;
    }
    displayProducts();
}

function displayProducts() {
    const grid = document.getElementById("productGrid");
    const searchVal = document.getElementById("searchInput").value.toLowerCase();
    grid.innerHTML = "";

    const filtered = allProducts.filter(item => {
        const matchesCat = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = "<p>No matching products found.</p>";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <span class="badge-new">Fresh</span>
            <div class="product-img-box">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-info">
                <h4>${item.name}</h4>
                <div>
                    <span class="price">₹${item.price}</span>
                    <span class="old-price">₹${item.oldPrice}</span>
                </div>
            </div>
            <div class="product-actions">
                <button onclick="viewDetail(${item.id})"><i class="fa fa-eye"></i> View Detail</button>
                <button onclick="addToCart(${item.id})"><svg class="cart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21 5H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"/></svg> Add to Cart</button>
            </div>
        `;

        card.addEventListener("mouseenter", function () {
            card.style.boxShadow = "0 6px 18px rgba(60, 184, 21, 0.2)";
            card.querySelector("img").style.transform = "scale(1.08)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "none";
            card.querySelector("img").style.transform = "scale(1)";
        });

        grid.appendChild(card);
    });
}

// Search and Filter
document.getElementById("searchInput").addEventListener("input", displayProducts);

const catBtns = document.querySelectorAll(".cat-btn");
catBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        catBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentCategory = this.getAttribute("data-cat");
        displayProducts();
    });
});

// Product Details
function viewDetail(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    document.getElementById("detailTitle").innerText = product.name;
    document.getElementById("detailContent").innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; border-radius:6px; margin-bottom:12px;">
        <p style="margin-bottom:10px;">${product.desc}</p>
        <h3 style="color:#3CB815; margin-bottom:15px;">Price: ₹${product.price}</h3>
        <button class="btn btn-primary" onclick="addToCart(${product.id}); document.getElementById('detailModal').style.display='none';"><svg class="cart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2ZM1 2v2h2l3.6 7.59-1.35 2.45C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21 5H5.21l-.94-2H1Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"/></svg> Add to Cart</button>
    `;
    document.getElementById("detailModal").style.display = "flex";
}

document.getElementById("closeDetail").addEventListener("click", function () {
    document.getElementById("detailModal").style.display = "none";
});

// Cart
function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(product.name + " added to cart!");
}

function updateCartUI() {
    const countEl = document.getElementById("cartCount");
    const listEl = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotal");

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    countEl.innerText = totalItems;

    if (cart.length === 0) {
        listEl.innerHTML = "<p>Your cart is empty.</p>";
        totalEl.innerText = "₹0";
        return;
    }

    listEl.innerHTML = "";
    let grandTotal = 0;

    cart.forEach(item => {
        const subTotal = item.price * item.qty;
        grandTotal += subTotal;

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>₹${item.price} x ${item.qty} = ₹${subTotal}</small>
            </div>
            <div>
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        listEl.appendChild(row);
    });

    totalEl.innerText = "₹" + grandTotal;
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

document.getElementById("cartBtn").addEventListener("click", function () {
    updateCartUI();
    document.getElementById("cartModal").style.display = "flex";
});

document.getElementById("closeCart").addEventListener("click", function () {
    document.getElementById("cartModal").style.display = "none";
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items first.");
        return;
    }
    alert("Order placed successfully! Thank you for shopping with Foody.");
    cart = [];
    updateCartUI();
    document.getElementById("cartModal").style.display = "none";
});

// Login & Signup
const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const tabLogin = document.getElementById("tabLogin");
const tabSignup = document.getElementById("tabSignup");

document.getElementById("loginBtn").addEventListener("click", function () {
    authModal.style.display = "flex";
});

document.getElementById("closeAuth").addEventListener("click", function () {
    authModal.style.display = "none";
});

tabLogin.addEventListener("click", function () {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    document.getElementById("authTitle").innerText = "Login";
});

tabSignup.addEventListener("click", function () {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    document.getElementById("authTitle").innerText = "Sign Up";
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const username = email.split("@")[0];
    document.getElementById("userLabel").innerText = username;
    authModal.style.display = "none";
    showToast("Welcome back, " + username + "!");
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signName").value;
    document.getElementById("userLabel").innerText = name;
    authModal.style.display = "none";
    showToast("Account created for " + name + "!");
});

// Language Switcher
document.getElementById("langSelect").addEventListener("change", function () {
    const lang = this.value;
    const dict = translations[lang];

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });
});

// Menu & Newsletter
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
});

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("newsEmail").value = "";
    showToast("Subscribed to newsletter!");
});

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}

fetchProductsFromAPI();