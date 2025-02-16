function firstChar(text) {
   let c = null;
	for(let i =0; i<text.length; i++){
		if(text[i] !== ' '){
			c = text[i];
			break;
		}
	}
	return c === null ? '' : c;
};

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
