
var Lab = require('lab')
var Code = require('code')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('seneca-cli-ent', function () {

    it('need tests to be writen', function(done){
        expect(['work', 'to', 'be', 'done']).to.exist()
        done()
    })

})