
function control() {

    var username= document.getElementById("name").value.length;
    var pass= document.getElementById("password1").value.length;
    var pass2= document.getElementById("password2").value.length;
    var mail= document.getElementById("email").value.length;

    // Kullanıcı adı veya şifre girilmemişse
    if (username == 0 || pass == 0 || pass2 == 0 || mail == 0 ) { 
    alert("Kullanıcı adı, şifre veya email boş bırakılamaz.");
    }
    
    // Şifre 6 karakterden kısaysa
    else if (pass < 6) {
    alert("Şifre 6 karakterden kısa olamaz.");
    }
    // Kullanıcı adı 3'den küçük 20'den fazlaysa 
    else if (username < 3 || username > 20) { 
    alert("Kullanıcı adı 3-20 karakter arasında olmalıdır."); 
    }
    else if(pass != pass2){
        alert("Şifreler uyuşmuyor.")
    }

   }

function control2() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mail = document.getElementById("email").value;

    /*email formatının kontrolü*/
    if(reg.test(mail) == false) 
        {
          alert('Hatalı mail formatı!');
          return false;
        }
        else{  window.location="index.html";}
        
  document.getElementById("result").innerHTML = text; 
  }