function control() {

  var username= document.getElementById("name").value.length;
  var ct= document.getElementById("country").value.length;
  var mail= document.getElementById("email").value.length;
  var tn= document.getElementById("town").value.length;
  var pn= document.getElementById("phone").value.length;
  var card= document.getElementById("cardnumber").value.length;
  var cname= document.getElementById("cardname").value.length;
  var cvc= document.getElementById("cvc").value.length;

  // Bilgiler girilmemişse
  if (username == 0 || ct == 0 || mail == 0 || tn == 0 || pn == 0 || card == 0|| cname == 0 || cvc == 0) { 
  alert("Her alan doldurulmalıdır.");
  }
    // İsim soyisim 3'den küçük 20'den fazlaysa 
  else if (username < 3 || username > 20) { 
  alert("İsim ve soyisim 3-20 karakter arasında olmalıdır"); 
  }
   // İl 3'den küçük 15'den fazlaysa 
  else if (ct < 3 || ct > 15) { 
  alert("İl 3-15 karakter arasında olmalıdır"); 
   }
   // İlçe ve sokak 3'den küçük 30'den fazlaysa 
  else if (tn < 3 || tn > 30) { 
    alert("İlçe ve sokak 3-30 karakter arasında olmalıdır"); 
     }
   // Telefon numarası 10 karakterden fazla veya azsa
  else if (pn < 10 || pn > 10) { 
    alert("Telefon numarası 10 karakter olmalıdır"); 
     }
   // Kart numarası 16 karakterden fazla veya azsa
  else if (card < 16 || card > 16) { 
    alert("Kart numarası 16 karakter olmalıdır"); 
     }
   // Kart sahinin ismi ve soyismi 3'den küçük 20'den fazlaysa 
  else if (cname < 3 || cname > 20) { 
    alert("Kart sahinin ismi ve soyismi 3-20 karakter arasında olmalıdır"); 
    }
  // Cvc 3 karakterden fazla veya azsa
  else if (cvc < 3 || cvc > 3) { 
     alert("Telefon numarası 10 karakter olmalıdır"); 
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
      else{ alert("Bağış Başarılı") }

document.getElementById("result").innerHTML = text; 
}
