function forRegister() {
    // alert("Your Registration successful!");
    var atext = document.getElementById("text");
    if (atext) {
        var text = atext.value;
        console.log(text);
    }
    var aemail = document.getElementById("email")
    if (aemail) {
        var email = aemail.value;
        console.log(email);
    }
    var apassword = document.getElementById("password");
    if (apassword) {
        var password = apassword.value;
        console.log(password);
    }
    if (text && email && password) {
        localStorage.setItem ("userdata",JSON.stringify({usertext:text, useremail:email, userpassword:password }) )
        localStorage.setItem("isuserLoggedIn", "false");
        alert("your registered was done");
        window.location.href = "./login.html"
    console.log("all fields are there")
         } else {
            alert("ERROR: first put your data proprly")
         }
}

function forLogin() {
    var aemail = document.getElementById("email")
    if (aemail) {
        var email = aemail.value;
        console.log(email);
    }
    var apassword = document.getElementById("password");
    if (apassword) {
        var password = apassword.value;
        console.log(password);
    }
    if (email && password) {
    var dataFromLocal = localStorage.getItem("userdata")
    // console.log(dataFromLocal)
    var parsedData = JSON.parse(dataFromLocal)
    // console.log(parsedData.useremail,"parsedData.useremail")
    if (email == parsedData.useremail && password == parsedData.userpassword){
        localStorage.setItem("isuserLoggedIn", "true");
        alert("login successfull")
        window.location.href = "./home.html"
    } else{
        alert("wrong information")
    }
    } else{
        alert("ERROR:write all cred")
    }

}
      function productPage(proId) {
        alert("its working")
        console.log(proId,"proid")
        var exitLocal = JSON.parse(localStorage.getItem("allProduct"));
        console.log(exitLocal)
        if(exitLocal == null){exitLocal = []}
        console.log(exitLocal,"exitlocal 1")
        var proPs = proId.querySelectorAll("p");
        var proName = proPs[0].innerText
        // console.log(proName,"proname")
        var proImg = proId.querySelector("img").src
        var proPrice = proPs[2].innerText
        // console.log(proPrice)

        var proObj = {pN:proName, pP:proPrice, pI:proImg}
        // console.log(proObj,"proobj")
        exitLocal.push(proObj)
        // console.log(exitLocal,"exitlocal 2")
        localStorage.setItem("allProduct", JSON.stringify(exitLocal))
        alert("product added !")


      }
    //  function productPage(proId) {
    //     alert("its working")
    //     // console.log(proId)
    //     var exitLocal = JSON.parse(localStorage.getItem("allproduct"));
    //     console.log(exitLocal)
    //     if(exitLocal == null){
    //         exitLocal = []
    //     }
    //     // console.log(addLocal,"addlocal 1")
    //     var props = proId.querySelectorAll("p")
    //     var proname = props[0].innerText;
    //     // console.log(proname,"proname")
    //     var proImg = proId.querySelector("img").src
    //     //  console.log(proImg)
    //      var proprice = props[2].innerText;
    //      console.log(proprice,"proprice")
    //      var proObj = {pN:proname,pP:proprice,pI:proImg}
    //     //  console.log(proObj,"proobj")
    //      exitLocal.push(proObj);
    //     //  console.log(addLocal,"addlocal 2")
    //     localStorage.setItem("allproduct", JSON.stringify(exitLocal))
    //     alert("product added")
    //  }
    

