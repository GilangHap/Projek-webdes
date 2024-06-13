// login dengan sosmed
function loginsosmed(){
    alert("Maaf fitur belum tersedia saat ini");
}

const googlelogin = document.getElementById('google-login');
const fblogin = document.getElementById('fb-login');
const applelogin = document.getElementById('apple-login');

googlelogin.addEventListener('click', loginsosmed);
fblogin.addEventListener('click', loginsosmed);
applelogin.addEventListener('click', loginsosmed);

// bikin akun
function signup(event){
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(nama && email && password){
        alert(`Selamat datang `+nama);
        window.location.href = "../produk/index.html";
    }else{
        alert('Harap masukan data dengan lengkap');
    }
}

const masuk = document.getElementById('loginform');
masuk.addEventListener('submit',signup);
