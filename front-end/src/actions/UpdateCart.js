import axios from 'axios';

export default function(userToken, productCode){
	console.log(userToken, productCode)
	
	const thePromise = axios({
		method: "POST",
		url: `${window.apiHost}/updateCart`,
		data:{
			userToken: userToken,
			productCode: productCode
		}
	})
	return{
		type: "UPDATE_CART",
		payload: thePromise
	}
}