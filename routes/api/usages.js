module.exports = function(app){

    // reference: https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
    app.post('/api/usages', async function(req, res) {

        // Store the supplied usage data
        app.usages.push(req.body);

        var usageId = app.usages.length;

        // Only log output every 100 posts
        if ((usageId % 100) === 0) {
            console.log('Stored usage count: ' + usageId);
        }
        res.status(201).json({'id':usageId});
    });
}
