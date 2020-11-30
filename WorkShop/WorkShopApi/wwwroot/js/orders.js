



// request states
var order_state_list_rs = www.order_states.request({});

if (order_state_list_rs.result == 'ok') {

	var order_state_list = order_state_list_rs.data;
	var states_html = www.renderArray('orders_state_list', order_state_list);
	$('#orders_state_list').html(states_html + '<tr valign="top" height="100%"><td align="center"></td> </tr>');
	localStorage['selected_state_id'] = 2;

	var order_list_rs = www.client_orders.request({
		state_id: localStorage['selected_state_id']
	});

	if (order_list_rs.result == 'ok') {
		var order_list = order_list_rs.data;
		var order_list_0 = [];
		var order_list_1 = [];
		var order_list_2 = [];

		for (var i = 0; i <= order_list.length - 1; i++) {
			var o = order_list[i];
			switch (o.at_work) {
				case 0:
					order_list_0.push(o);
					break;
				case 1:
					order_list_1.push(o);
					break;
				case 2:
					order_list_2.push(o);
					break;

			};
		};

		var order_list_0_html = www.renderArray('orders_at_work_is_queued', order_list_0);
		$('#orders_at_work_is_queued').html(order_list_0_html);

		var order_list_1_html = www.renderArray('orders_at_work_is_active', order_list_1);
		$('#orders_at_work_is_active').html(order_list_1_html);

		var order_list_2_html = www.renderArray('orders_at_work_is_wait', order_list_2);
		$('#orders_at_work_is_wait').html(order_list_2_html);

		// state actions
		// order state actions

	}
	else {
		err(order_list_rs.msg);
	}

}
else {
	err(order_state_list_rs.msg);
}


// request orders

// request actions
































