var vorpal = require('vorpal')()

vorpal
    .command('hello [who]', 'Says Hello to "who"')
    .action(function (args, callback) {
        this.log('Hello ' + (args.who || 'Seneca') + '!');
        callback();
    })

vorpal
    .delimiter('[seneca]> ')
    .show()
