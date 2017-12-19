export default function (state = [], action){
	
	if(action.type === "GET_PRODUCTLINES"){

		return action.payload.data
	}else{
	return state;
}
}