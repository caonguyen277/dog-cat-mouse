function Mouse (name,age){
	this.name = name;
	this.age = age;
	this.dead = false;
}
Mouse.prototype.sleep = function(){
	console.log(sleep);
}
Mouse.prototype.die = function(){
	this.deat = true;
}
module.exports = Mouse ;