var m_share = (function() {
	var self = {
		name: ko.observable(""),
		email: ko.observable(""),

		is_downloading: ko.observable(false),
		is_printing: ko.observable(false),
		is_sending_email: ko.observable(false),

		email_err: ko.observable(),

		downloadCertificate: function() {
			self.is_downloading(true)

			$.ajax({
				url: "/api/certificate/download",
				data: { name: self.name() },
				dataType: "json",
				type: "GET",
				contentType: "application/json",
				success: function(data) {
					window.location = data.url;
					self.is_downloading(false)
				},
				error: function(xhr, status, err) {
					self.is_downloading(false)
				}
			})
		},

		sendEmail: function() {
			self.is_sending_email(true)
			self.email_err(null)

			$.ajax({
				url: "/api/certificate/email",
				data: { name: self.name(), email: self.email() },
				dataType: "json",
				type: "GET",
				contentType: "application/json",
				success: function(data) {
					self.is_sending_email(false)
					self.email(null)

					email_modal.dialog("close")
					email_confirm.dialog("open")
				},
				error: function(xhr, status, err) {
					self.is_sending_email(false)
					self.email(null)
					self.email_err(xhr.responseJSON.err)
					
					email_modal.dialog("close")
					email_confirm.dialog("open")
				}
			})
		},

		shareVK: function() {
            VK.Api.call("wall.post", {
                message: "Я прошел «Час кода»! Программирование — это проще, чем кажется. Попробуй и ты!",
                attachments: "photo83885650_345606258,http://coderussia.ru"
            }, function(r) {
                console.log("shareVK", r)
            }) 
        },
        shareFB: function() {
            FB.ui({
                method: "share",
                href: "http://coderussia.ru"
            }, function(r) {
                console.log("shareFB", r)
            })
        }
	}

	self.ERR_LIST = {
		invalid_email: "Вы ввели неверный почтовый адрес. Попробуйте еще раз.",
		no_name: "Вы не ввели свое имя."
	}

	self.link_print = ko.computed(function() {
		if(self.name()) {
			var param = $.param({ name: self.name() })
			return "/api/certificate/print?" + param
		} else {
			return null
		}
	})

	self.openModal = function() {
		email_modal.dialog("open")
	}
	self.closeModal = function() {
		email_modal.dialog("close")
		return true
	}

	return self
})()

$(document).ready(function() {
	ko.applyBindings(m_share)	
})
