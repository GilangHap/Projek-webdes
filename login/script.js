// Login dengan username dan password
function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    window.location.href = "../produk/index.html";
    alert(`Selamat datang ` + username);
  } else {
    alert("Harap masukan username dan password dengan benar");
  }
}

const masuk = document.getElementById("loginform");
masuk.addEventListener("submit", login);

// login dengan sosmed
function loginsosmed() {
  alert("Maaf fitur belum tersedia saat ini");
}

const googlelogin = document.getElementById("google-login");
const fblogin = document.getElementById("fb-login");
const applelogin = document.getElementById("apple-login");

googlelogin.addEventListener("click", loginsosmed);
fblogin.addEventListener("click", loginsosmed);
applelogin.addEventListener("click", loginsosmed);

