export default function (state = [], action){
	console.log(action.type);
	if(action.type === "UPDATE_CART"){

		return action.payload.data
	}else{
	return state;
}
}