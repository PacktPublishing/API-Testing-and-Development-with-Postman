fs = require('fs');
fs.readFile('initial_local_db.json',function(err, data){
	if (err) throw err;
	 
	fs.writeFile('local_db.json', data, 'utf-8', function(err) {
		if (err) throw err;
		console.log('Done!');
	})
})