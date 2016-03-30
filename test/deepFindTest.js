DeepFind = require('../public/javascripts/deepFind.js');

describe('DeepFind', function () {
    var finder = null;
    describe('#find', function () {
        it('should find all properties named "fields"', function () {
            finder = new DeepFind({"fields": "2"}, "fields");
            finder.find().should.deep.equal(["2"])
        })
        it('should not find properties not named "fields"', function () {
            finder = new DeepFind({"stuff": "2"}, "fields");
            finder.find().should.deep.equal([])
        })
        it('should find deep properties named "fields"', function () {
            finder = new DeepFind({"stuff": {"fields": "2"}}, "fields");
            finder.find().should.deep.equal(["2"])
        })
        it('should find multiple deep properties named "fields"', function () {
            finder = new DeepFind({
                "stuff": {"fields": "2"},
                "otherStuff": {"deepStuff": {"moreDeepStuff": {"fields": "7"}}}

            }, "fields");
            finder.find().should.deep.equal(["2", "7"])
        })
    })
})