
$('#client_login').click(function () {
	localStorage['last_mobile'] = $('#mobile').val();
	var client_login_rs = www.client_login.request({
		mobile: $('#mobile').val() 
	});
	if (client_login_rs.result == 'ok') {

		localStorage['authsid'] = client_login_rs.data.sid;

		$('#st2').show();
		$('#st1').hide();
	}
	else {
		err(client_login_rs.msg);
	}


});
$('#client_login_code').click(function () {
	var client_login_code_rs = www.client_login_code.request({ sid: localStorage['authsid'], code: $('#code').val()  });
	if (client_login_code_rs.result == 'ok') {
		localStorage['token'] = client_login_code_rs.data.token;
		window.location.href = 'orders.html';
	}
	else {
		err(client_login_code_rs.msg);
	}
});
$('#st2').hide();

$('#mobile').val(localStorage['last_mobile']);















