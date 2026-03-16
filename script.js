/* =====================================================
   MENGAMBIL ELEMEN HTML
   ===================================================== */

const form = document.getElementById("login-form");
const message = document.getElementById("message");
const passwordInput = document.getElementById("password");
const togglepassword = document.getElementById("togglePassword");


/* =====================================================
   CEK STATUS LOGIN
   Jika sudah login tidak boleh kembali ke halaman login
   ===================================================== */

const loginStatus = localStorage.getItem("isLogin");

if(loginStatus === "true"){
  window.location.replace("beranda.html");
}


/* =====================================================
   TOGGLE PASSWORD (ICON MATA)
   ===================================================== */

togglepassword.addEventListener("click", function(){

  if(passwordInput.type === "password"){
    passwordInput.type = "text";
    togglepassword.textContent = "🙉";
  }
  else{
    passwordInput.type = "password";
    togglepassword.textContent = "🙈";
  }

});


/* =====================================================
   SISTEM LOGIN
   ===================================================== */

form.addEventListener("submit", function(event){

  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");


  if(username === "" || password === ""){
    message.textContent = "jangan kosong cuki";
  }

  else if(password.length < 4){
    message.textContent = "password kependekan";
  }

  else if(username === savedUser && password === savedPass){

    /* simpan status login */
    localStorage.setItem("isLogin","true");

    /* simpan username yang sedang login */
    localStorage.setItem("username", username);

    window.location.href = "beranda.html";

  }

  else{
    message.textContent = "username atau password salah";
  }

});