/* =========================================================
   MENGAMBIL DATA USER DARI LOCAL STORAGE
   ========================================================= */

const username = localStorage.getItem("username");
const loginStatus = localStorage.getItem("isLogin");


/* =========================================================
   CEK STATUS LOGIN
   ========================================================= */

if(loginStatus !== "true"){
  window.location.replace("login.html");
}


/* =========================================================
   MENGAMBIL ELEMEN HTML
   ========================================================= */

const welcometext = document.getElementById("welcome-user");
const logoutBtn = document.getElementById("logout");


/* =========================================================
   MENAMPILKAN NAMA USER
   ========================================================= */

if(username && welcometext){
  welcometext.textContent = "Halo " + username;
}


/* =========================================================
   SISTEM LOGOUT
   ========================================================= */

if(logoutBtn){
  logoutBtn.addEventListener("click", function(e){

    e.preventDefault();

    localStorage.removeItem("isLogin");

    window.location.replace("index.html");

  });
}