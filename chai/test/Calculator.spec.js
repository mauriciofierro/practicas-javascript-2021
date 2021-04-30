var Calculator = require('../src/Calculator')
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Calculator', () => {

    describe('Sum operation', () => {
        it('Sum two positive integers', () => {
            var result = Calculator.sum(5, 5);
            expect(result).to.equal(10);
        });
    
        it('Sum two negative integers', () => {
            var result = Calculator.sum(-5, -5);
            expect(result).to.equal(-10);
        });
    
        it('Sum one positive and one negative integers', () => {
            var result = Calculator.sum(-5, 5);
            expect(result).to.equal(0);
        });

    
         it('Passing a character as the first number', () => {
            var result = Calculator.sum('a', 5);
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as the second number', () => {
            var result = Calculator.sum(5, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as both numbers', () => {
            var result = Calculator.sum('a', 'a');
            expect(result).to.equal('Not numbers');
        });
        
        it('Passing null as the first number', () => {
            var result = Calculator.sum(null, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('Sum stub', () => {
            Calculator.sum = sinon.stub().withArgs(5, 5).returns(10);
            expect(Calculator.sum(5, 5)).to.equal(10);
        });
    });

    describe('Substraction operation', () => {
        it('Substract two positive integers', () => {
            var result = Calculator.substract(20, 5);
            expect(result).to.equal(15);
        });

        it('Substract two negative integers', () => {
            var result = Calculator.substract(-20, -5);
            expect(result).to.equal(-25);
        });

        it('Passing a character as the first number', () => {
            var result = Calculator.substract('a', 5);
            expect(result).to.equal('Not numbers');
        });
    });
    
    describe('Division operation', () => {

        it('Divide two numbers', () => {
        var result = Calculator.division(20,5);
        expect(result).to.equal(4);
        });

        it('Divide two negative integers', () => {
            var result = Calculator.division(-1,-1);
            expect(result).to.equal(1);
        });

        it('Passing a character as the first number', () => {
            var result = Calculator.division('a', 5);
            expect(result).to.equal('Not numbers');
        });

        it('Passing a character as the second number', () => {
            var result = Calculator.division(5, 'a');
            expect(result).to.equal('Not numbers');
        });


    });

});
