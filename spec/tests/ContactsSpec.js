
describe("Contacts Test Suite", function(){
     var idCreated;
	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";

	describe("hello world", function(){

		it("hello world",function(done){
		    
		    request.get(base_url, function(error, response, body){
		    

				expect(response.statusCode).toBe(200);
				//expect(body).toBe("Hello World");
               
				done();
		    });
		});

	});

	describe("create update contact", function(){
		//var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should retrieve contact",function(done){

			request.get({
							url: contacts_url + "/" + idCreated,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(body);
							expect(body.firstName).toBe("jagan");
							done();
					    });
		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							expect(body.firstName).toBe("jagan-updated");
							expect(body.phone).toBe("23002300");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){
                var idCreat;
		it("should post message to contact", function(done){
			//TODO: Write your test case here.
             
			//console.log(JSON.stringify(contact1));
		    var message1=new Object();
		    message1.mess="hi hello";
		    request.post({url: contacts_url+"/messages"+"/"+idCreated,
		    			  body: message1,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
		    		    
                          console.log(body);
                          
							//expect(response.statusCode).toBe(200);
							
							idCreat = body;
						
							done();
					    });

			

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
			var m=0;
			request.get({
							url: contacts_url + "/messages"+"/"+idCreated+"/"+idCreat ,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
						
							console.log(body);
						
							//expect(body.firstName).toBe("jagan");
							done();
					    });
			

		});

	});
describe("post and get message to contact", function(){
                var idCreat;
		it("should post message to contact", function(done){
			//TODO: Write your test case here.
             
			//console.log(JSON.stringify(contact1));
		    var message12=new Object();
		    message12.mess="hi rnd";
		    request.post({url: contacts_url+"/messages"+"/"+idCreated,
		    			  body: message12,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
		    		    	
                          console.log(body);
                          
							//expect(response.statusCode).toBe(200);
							
							idCreat = body;
							
							done();
					    });

			

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
		
			request.get({
							url: contacts_url + "/messages"+"/"+idCreated+"/"+idCreat ,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							
							console.log(body);
							
							//expect(body.firstName).toBe("jagan");
							done();
					    });
			

		});

	});

});
