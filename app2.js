var app = require('express');
var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

var myService = {
    MyService: {
        MyPort: {
            MyFunction: function(args) {
                return {
                    name: args.name
                }
            }
        }
    }
}

app.use(bodyParser.raw({ type: function() { return true; }, limit: '5mb' }));
app.listen(4000, function() {
    soap.listen(app, '/wsdl', myService, xml, function() {
        console.log('server running on port 4000');
    })
})