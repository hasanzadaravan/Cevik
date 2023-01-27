$(Document).ready(function () {


  $('#btn-login').click(function () {

    const toSend = {
      username: "Revan",
      password: "123456",
      domain: "chwdev"
    }




    const jsonString = JSON.stringify(toSend)
    const xmlRequest = XMLHttpRequest();

    xmlRequest.open("POST", "http://localhost:8080/sa/api/login")
    xmlRequest.send(jsonString)

    xmlRequest.onload = () => {
      console.log(xmlRequest);

      if (xmlRequest.status === 200) {
        console.log("basarili")
      } else {
        console.log("basarisiz")
      }
    }



  })
});
