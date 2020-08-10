const compareDates = (date1, date2) => {
	if (date1.getHours() == date2.getHours() && date1.getMinutes() == date2.getMinutes()) {
		return true;
	}
	else {
		return false;
	}
}
const clearFields = () => {
	document.getElementById("tag").value = "";
	document.getElementById("hour").value = "";
	document.getElementById("minute").value = "";
}
function _(elem) {
	return document.getElementById(elem);
}
function formatDate(x) {
	var dt = new Date(x);
	return (((dt.getHours() < 10)?"0"+dt.getHours():dt.getHours()) + ":" + ((dt.getMinutes() < 10)?"0"+dt.getMinutes():dt.getMinutes()));
}
function config() {
	document.getElementById("inner").innerHTML = "";
	if (localStorage.getItem("alarms")) {
		arr = JSON.parse(localStorage.getItem("alarms"));
	} 
	else {
		localStorage.setItem("alarms", JSON.stringify([]));
		arr = JSON.parse(localStorage.getItem("alarms"));
	}
	if (arr.length == 0) {
		document.getElementById("inner").innerHTML = '<tr><td colspan="3"><center><i class="fas fa-clock"></i> No alarm set yet!</center></td></tr>';
	}
	else {
		for (let i = 0; i < arr.length; i++) {
			_("inner").innerHTML += '<tr><td>'+ arr[i].tag +'</td><td>'+ formatDate(arr[i].time) +'</td><td style="width:120px"><button id="d'+ i +'" class="btn btn-danger btn-sm remover"><i class="fas fa-trash"></i> Remove</button>';
		}
	}	
}