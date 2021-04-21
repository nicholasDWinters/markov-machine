const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
    let phrase;
    beforeEach(function () {
        phrase = new MarkovMachine('the cat in the hat');
    })

    test('chains are created correctly', function () {
        expect(phrase.chains).toEqual({ the: ['cat', 'hat'], cat: ['in'], in: ['the'], hat: [null] }
        )
    })

    test('makeText returns a string', function () {
        expect(phrase.makeText(20)).toEqual(expect.any(String))
    })

    test('makeText returns a phrase less than or equal than numwords', function () {
        expect(phrase.makeText(5).split(' ').length).toBeLessThanOrEqual(5)
        expect(phrase.makeText(20).split(' ').length).toBeLessThanOrEqual(20)
        expect(phrase.makeText(1).split(' ').length).toBeLessThanOrEqual(1)
    })

    test('ends with the last word in the phrase', function () {
        expect(phrase.makeText(10).endsWith('hat')).toBe(true)
    })
});

