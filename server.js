var depLinker = require('dep-linker');
depLinker.linkDependenciesTo('./public/scripts')
    .then(() => console.log('Finished.'));

var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000;

app.set('port', PORT);
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/privacy-policy', function(req, res) {
    res.sendFile(__dirname + '/public/privacy_policy.html');
});
app.get('/terms-of-service', function(req, res) {
    res.sendFile(__dirname + '/public/tos.html');
});

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Server running at http://127.0.0.1:5000')
});