﻿   
function err(msg) {
    alert(msg);


};



function api_action(methodName) {
    var aa = {};
    aa.name = methodName;
    console.log(methodName);
    aa.request = function (body) {
        var res = {};
        var js = JSON.stringify(body);
        console.log(js);
        console.log(body);
        $.ajax({
            type: "POST",
            async: false,
            url: methodName,
            data: js,
            success: function (resp) {
                res =  resp ;
            },
            dataType: 'json'
            });
        return res;
    }; 
    return aa;
}






function createApi(api_url) {
    var api = {};


    api['user_login'] = api_action(api_url + 'user_login/');
    api['user_logout'] = api_action(api_url + 'user_logout/');
    api['order_states'] = api_action(api_url + 'order_states/');

    api['file_add'] = api_action(api_url + 'file_add/');
    api['file_get'] = api_action(api_url + 'file_get/');
     
    api['user_token_validate'] = api_action(api_url + 'user_token_validate/');
    api['client_login'] = api_action(api_url + 'client_login/');
    api['client_login_code'] = api_action(api_url + 'client_login_code/');
    api['client_orders'] = api_action(api_url + 'client_orders/');
    api['client_order'] = api_action(api_url + 'client_order/');
    api['user'] = api_action(api_url + 'user/');
    api['client'] = api_action(api_url + 'client/');
    api['logs'] = api_action(api_url + 'logs/');
    api['users'] = api_action(api_url + 'users/');
    api['user_groups'] = api_action(api_url + 'user_groups/');

   
    api.renderObject = function (ee, obj) {
        var htmlString = ee;
        console.log(ee);
        console.log(obj);
        var nms = Object.getOwnPropertyNames(obj);
        for (var i = 0; i <= nms.length - 1; i++) {
            htmlString = htmlString.replaceAll('{' + nms[i] + '}', obj[nms[i]]);
        }
        return htmlString;
    };

    api.renderArray = function (e_id, objarr) {

        var html = "";
        console.log(e_id);
        var html_item = $('#' + e_id  ).html();
        for (var j = 0; j <= objarr.length - 1; j++) {
            html += this.renderObject(html_item, objarr[j]);
        }; 
        return html;

    };

    api.renderLogin = function (lst) {


        var h = this.renderArray('rootid_item', lst);
        $('#rootid').html(h);


    };
    return api;

};




var www = createApi('/api/common/base/');
 



























