function datepicker_init(){
	const config = {
		minDate: "today",
		maxDate: new Date().fp_incr(14),
		dateFormat: "Y-m-d",
	}

	const datepickers = document.querySelectorAll(".datepicker");

	for (const el of datepickers) {
		const el_datepicker =flatpickr(el, config);
	}
}

function timepicker_init(){
	const config = {
		enableTime: true,
		noCalendar: true,
		dateFormat: "H:i",
		time_24hr: true,
	}
	const timepicker = document.querySelectorAll(".timepicker");

	for (const el of timepicker) {
		const el_timepicker =flatpickr(el, config);
	}
}


