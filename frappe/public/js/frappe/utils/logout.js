frappe.logout = function () {
	frappe.call({
		method: "logout",
		callback: function (r) {
			if (r.exc) {
				return;
			}

			if (frappe.boot.is_fc_site) {
				const frappeCloudBaseEndpoint = "https://frappecloud.com";
				// navigate to login page of Frappe Cloud if the site is hosted on Frappe Cloud
				window.location.href = `${frappeCloudBaseEndpoint}/dashboard/site-login`;
			} else window.location.href = "/login";
		},
	});
};
