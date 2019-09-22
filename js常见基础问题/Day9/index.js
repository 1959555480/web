function type (obj) {
	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
}

console.log(type([]))  //"Array"
console.log(type(1))  //"Number"