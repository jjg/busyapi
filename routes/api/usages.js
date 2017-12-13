module.exports = function(app){
    app.post('/api/usages', function(req, res){

        // Store the supplied usage data
        app.usages.push(req.body);

        var usageId = app.usages.length;
        // console.log('Stored usage count: ' + usageId);

        res.status(201).json({'id':usageId});
    });
}
