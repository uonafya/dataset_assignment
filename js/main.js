var ME = "";
var url = "http://localhost:8082/api/";
// var url = "https://test.hiskenya.org/kenya/api/";

$(function () {
	
	// fetch my details
	$.ajax({
		type:'get',
		url:url + 'me.json',
		async:false,
		headers: {
			'Authorization': 'Basic c3JhcGFuZG86MTI2MzExNV9Db21wc2Np',
		},
		dataType:'json',
		success: function(res) {
			ME = res;
			fetch_sub_counties(ME.id);
		}
	})

});


function fetch_sub_counties(user_id) {

	$.ajax({
		type:'get',
		url: url + 'users/' + user_id + '.json?fields=organisationUnits[id,level,displayName]',
		dataType: 'json',
		success: function(res) {
			console.log(res)
			$(".loader").fadeOut(500);
		}
	})

}