
$('#login_user_button').click = function () {

    //
    // 

    var login_result = www.user_login.request(datajson);
    if (login_result.result = 'ok') {

        // берем токен
        // сохр в LS
        // переадр на client_orders.html

    }
    else {

        err(login_result.msg);

    }




};





var lst = www.client_orders.request({ state_id: 2 });   


www.renderLogin(lst.data);














