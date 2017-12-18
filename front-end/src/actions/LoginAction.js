import axios from 'axios';

export default function(formData){
	console.log("Auth Action is running...")
	console.log(formData);
	var axiosPromise = axios({
		method: "POST",
		url: `${window.apiHost}/login`,
		
		data: formData
	});
	console.log(axiosPromise);
	// our redux-promise middleware will kick in
	// because the payload value is a promise
	// redux-promise will hold up the dispatch
	// until it resolves
	return{
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}
