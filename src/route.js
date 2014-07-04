module.exports  = function(app){

	var Persona = require('./persona');

//Persona.find
//Persona.insert

//GET
	findPersonas = function(req,res){

		Persona.find(function(err,personas){
			if(!err)
				res.send(personas);
							else
				console.log("ERROR " + err);
		});
	}
//POST
	savePersona = function(req,res){

		var personaTemp = new Persona({

			nombre : req.body.nombre,
			apellido : req.body.apellido,
			edad : req.body.edad,
			dni : req.body.dni

		});

		personaTemp.save(function(err,output){
			if(!err)
				res.send(output);
			else
				console.log("ERROR " + err);
		});

	}
//UPDATE

findPersonasbyid = function(req,res) {

		Persona.findById (req.params.id, function(err,personabyid){
			if(!err)
				res.send(personabyid);
							else
				console.log("ERROR " + err);
		});

	}



	updatePersona = function(req,res) {

		Persona.findById (req.params.id, function(err, encontrado){

				if(err)
					console.log("ERROR " + err);
				//res.send({ msj:"el registro fue satisfactorio"});}
					else{

					encontrado.nombre	= req.body.nombre;
					encontrado.apellido = req.body.apellido;
					encontrado.edad 	= req.body.edad;
					encontrado.dni 		= req.body.dni;
					encontrado.save(function(err){
						if(!err)
						res.send({ msj:"el update fue satisfactorio"});
						else
						console.log("ERROR " + err);

					});
				}
		});

	}

app.get('/persona/:id',findPersonasbyid);
app.put('/personas/:id',updatePersona);
app.get('/personas',findPersonas);
app.post('/personas',savePersona);

app.get('/', function(req, res) {						
	    res.sendfile('index.html');				
	});
}


