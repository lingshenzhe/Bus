function login(){
    $.ajax({
        url: 'http://123.206.18.85:8090/login',
        type: 'POST',
        async: true,
        data: {
            "login_id": "admin",
            "password": "admin"
        },
        timeout: 5000,
        dataType: 'json',
        beforeSend: function (xhr) {
            console.log(xhr)
            console.log('发送前')
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data)
            console.log(textStatus)
            console.log(jqXHR)
            if (data.errorCode == 200) {
                    window.location.href = "../main/main.html";
            } else {
                console.log(data.errorMsg)
            }
        },
        error: function (xhr, textStatus) {
            console.log('错误')
            console.log(xhr)
            console.log(textStatus)
        },
        complete: function () {
            console.log('结束')
        }
    })
}