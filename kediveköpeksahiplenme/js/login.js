function control() {

    var username= document.getElementById("name").value.length;
    var pass= document.getElementById("password1").value.length;

    // Kullanıcı adı veya şifre girilmemişse
    if (username == 0 ) { 
    alert("Kullanıcı adı boş bırakılamaz.");
    }
    else if(pass == 0 ) {
        alert("Şifre boş bırakılamaz.");
    }
    
	else{
        window.location="index.html";
    }
    
    document.getElementById("result").innerHTML = text;
   }