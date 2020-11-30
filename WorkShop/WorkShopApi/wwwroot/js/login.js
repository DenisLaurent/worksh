
$('#login_user_button').click(function () {
        localStorage['last_login'] = $('#login').val();
    var datajson = { login: $('#login').val(), password: $('#password').val() };
    var login_result = www.user_login.request(datajson);
    console.log(login_result);
    if (login_result.result == 'ok') {
        console.log(login_result);
        localStorage['token'] = login_result.data.token;
        localStorage['selected_state_id'] = login_result.data.default_state_id;
        window.location.href = 'orders.html';
    }
    else {
        err(login_result.msg);
    };
});

$('#login').val(localStorage['last_login']);















