// __          __           _    _____      _           _   
// \ \        / /          | |  / ____|    | |         | |  
//  \ \  /\  / /__  _ __ __| | | (___   ___| | ___  ___| |_ 
//   \ \/  \/ / _ \| '__/ _` |  \___ \ / _ \ |/ _ \/ __| __|
//    \  /\  / (_) | | | (_| |  ____) |  __/ |  __/ (__| |_ 
//     \/  \/ \___/|_|  \__,_| |_____/ \___|_|\___|\___|\__|
//                                                          
//*****************************************************************************
'use strict';
//*****************************************************************************

function removeWhiteSpace(array){

	let i = 0;
	let length = array.length;
	for (i = 0;i < length;i++){
		if (array[i] === ''){
			array.splice(i, 1);
			i--;
			length--;
		}
	}

}
const select = function (input, num){

	if (typeof input !== 'string'){
		return false;
	}
	else {
		const words = input.split(' ');
		removeWhiteSpace(words);
		
		if (words.length < num){
			return false;
		}
		else {
			return words[num - 1];
		}
	}
};

module.exports.select = select;
