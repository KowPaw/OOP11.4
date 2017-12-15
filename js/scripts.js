function Phone(brand, price, color, size, battery) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
	this.battery = battery;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

Phone.prototype.showSpecyfication = function() {
	alert('Brand: ' + this.brand + '\nColor: ' + this.color + '\nPrice: ' + this.price + '\nDisplay size: ' + this.size + '\nBattery: ' + this.battery + ' mAh');
}

var GalaxyS6 = new Phone('Samsung', 2250, 'black', 5.10, 2550);
var iPhone6s = new Phone('Apple', 2250, 'silver', 4.7, 1715);
var One = new Phone('OnePlus', 2250, 'grey', 5.5, 3100);

iPhone6s.printInfo();
GalaxyS6.printInfo();
One.printInfo();

iPhone6s.showSpecyfication();
GalaxyS6.showSpecyfication();
One.showSpecyfication();