function datepicker_init(){
	const config = {
			altInput: true,
			altFormat: "d.m.Y", // view
			dateFormat: "Y.m.d",
	}
	const datepickers = document.querySelectorAll(".datepicker");

	for (const el of datepickers) {

		const current_config = {
			altInput: (el.dataset.altinput) ? el.dataset.altinput : config.altInput,
			altFormat: (el.dataset.altformat) ? el.dataset.altformat : config.altFormat,
			dateFormat: (el.dataset.dateformat) ? el.dataset.dateformat : config.dateFormat,
			disableMobile: "true",
		}

		const el_datepicker =flatpickr(el, current_config);
	}
}

function timepicker_init(){
	const config = {
		enableTime: true,
		noCalendar: true,
		dateFormat: "H:i",
		time_24hr: true,
		disableMobile: "true",
		onOpen: function (selectedDates, dateStr, instance){
			if(selectedDates.length === 0){
				instance._input.value = '12:00';
			}
		}
	}
	const timepicker = document.querySelectorAll(".timepicker");

	for (const el of timepicker) {
		const el_timepicker =flatpickr(el, config);
	}
}


