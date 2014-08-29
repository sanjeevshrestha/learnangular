(function(){
var app=angular.module('store',[]);

app.controller('StoreController',function(){

	this.products=gems;
});


var gems=[{
	name:'Docahedron',
	price:100,
	description:'This is a test description for angular',
	canPurchase:true,
	soldOut:false
},{
	name:'Azurite',
	price:67.45,
	description:'This is a test description for angular',
	canPurchase:false,
	soldOut:false
},{
	name:'Diamond',
	price:76.50,
	description:'This is a test description for angular',
	canPurchase:false,
	soldOut:false
}]
})();
