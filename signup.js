/* =========================================================
   MENGAMBIL ELEMEN FORM
   ========================================================= */
const form = document.getElementById("signup-form");


/* =========================================================
   ELEMEN PESAN
   ========================================================= */
const message = document.getElementById("signup-message");


/* =========================================================
   TOGGLE PASSWORD
   ========================================================= */
const togglepassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("signup-password");

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


/* =========================================================
   SUBMIT FORM SIGNUP
   ========================================================= */
form.addEventListener("submit", function(event){

  event.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  const savedUser = localStorage.getItem("username");


  /* VALIDASI */

  if(username === "" && password === ""){
    message.textContent = "username sama password jangan kosong yatim";
  }

  else if(username === ""){
    message.textContent = "username jangan kosong yatim";
  }

  else if(password === ""){
    message.textContent = "password jangan kosong yatim";
  }

  else if(password.length < 4){
    message.textContent = "password kependekan cuki";
  }

  else if(username === savedUser){
    message.textContent = "username sudah dipakai";
  }

  else{

    /* simpan akun */
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    message.textContent = "akun berhasil dibuat";

    /* redirect ke login setelah 1.5 detik */
    setTimeout(function(){
      window.location.href = "index.html";
    },1500);

  }

});