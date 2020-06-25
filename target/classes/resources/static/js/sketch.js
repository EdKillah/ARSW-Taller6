var ctx = null;

function setup() {
	createCanvas(640, 480);
	// const context = canvas.getContext('2d');

	ctx = canvas.getContext("2d");
	alert("ctx: " + ctx);
	if (ctx) {
		var X = canvas.width;
		var Y = canvas.height;

		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, X, Y);
		ctx.save() // guarda el 1° estado

		ctx.fillStyle = "blue";
		ctx.fillRect(15, 15, X - 30, Y - 30);
		ctx.save(); // guarda el 2° estado

		ctx.fillStyle = "yellow";
		ctx.fillRect(30, 30, X - 60, Y - 60);
		ctx.save(); // guarda el 3° estado

		ctx.fillStyle = "green";
		ctx.fillRect(45, 45, X - 90, Y - 90);

		ctx.restore(); // recupera el 3° estado
		ctx.fillRect(60, 60, X - 120, Y - 120);

		ctx.restore(); // recupera el 2° estado
		ctx.fillRect(75, 75, X - 150, Y - 150);

		ctx.restore(); // recupera el 1° estado
		ctx.fillRect(90, 90, X - 180, Y - 180);
		ctx.restore(); // recupera el 1° estado
	}

}

function draw() {
	if (mouseIsPressed === true) {
		//const context = canvas.getContext('2d');
		fill(0, 0, 0);
		ctx.fillStyle = 'red';
		ellipse(mouseX, mouseY, 20, 20);
	}
	if (mouseIsPressed === false) {
		fill(255, 255, 255);
	}

}

function limpiar() {
	//const context = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function guardar() {
	alert("guardando...");
	//const context = canvas.getContext('2d');
	ctx.save();
	//alert("guardo bien... " + x);
}

function recuperar() {
	alert("Entrando en recuperar");
	//const context = canvas.getContext('2d');
	//limpiar();
	ctx.restore();
	fill(0, 0, 0);
	//alert("recupero bien?: " + context);
}