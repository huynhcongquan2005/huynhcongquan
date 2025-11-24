// --------------------- Bài 1 ---------------------
const products = ["Trà sữa", "Cà phê", "Sinh tố", "Nước ngọt", "Hồng trà"];

function loadProducts(list = products) {
    const container = document.getElementById("productList");
    if (!container) return;

    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `<div class="product-item">${p}</div>`;
    });
}
loadProducts();

function searchProduct() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const message = document.getElementById("message");

    const result = products.filter(p => p.toLowerCase().includes(input));
    
    if (result.length === 0) {
        message.textContent = "Không tìm thấy sản phẩm!";
        loadProducts([]);
    } else {
        message.textContent = "";
        loadProducts(result);
    }
}

// --------------------- Bài 2 ---------------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        let agree = document.getElementById("agree").checked;
        let result = document.getElementById("result");

        const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!agree) return result.textContent = "Bạn phải đồng ý điều khoản!";
        if (!passValid.test(pass)) return result.textContent = "Mật khẩu không đủ mạnh!";

        const user = { name, email };
        localStorage.setItem("userData", JSON.stringify(user));

        result.textContent = "Đăng ký thành công!";
    });
});

// --------------------- Bài 3 ---------------------
let time = 600;
let interval;

function startCountdown() {
    const timer = document.getElementById("timer");
    interval = setInterval(() => {
        let min = String(Math.floor(time / 60)).padStart(2, '0');
        let sec = String(time % 60).padStart(2, '0');
        timer.textContent = `${min}:${sec}`;

        if (time <= 60) timer.classList.add("low-time");
        if (time <= 0) {
            clearInterval(interval);
            document.getElementById("modal").style.display = "block";
        }
        time--;
    }, 1000);
}
startCountdown();

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
