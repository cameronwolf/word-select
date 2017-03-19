// __          __           _    _____      _           _   
// \ \        / /          | |  / ____|    | |         | |  
//  \ \  /\  / /__  _ __ __| | | (___   ___| | ___  ___| |_ 
//   \ \/  \/ / _ \| '__/ _` |  \___ \ / _ \ |/ _ \/ __| __|
//    \  /\  / (_) | | | (_| |  ____) |  __/ |  __/ (__| |_ 
//     \/  \/ \___/|_|  \__,_| |_____/ \___|_|\___|\___|\__|
//                                                          
//*****************************************************************************
'use strict';
//*****************************************************************************

const chai = require('chai');
const expect = chai.expect;

//*****************************************************************************

const wordSelect = require('../index.js');

//*****************************************************************************
describe('word-select', function(){

	it('should return a string when given a string, and a valid word is requested', function() {
		expect( wordSelect.select('First second third', 2)).to.equal('second');
	});
	it('should return false if the nth word does not exist', function() {
		expect( wordSelect.select('First second third', 4)).to.be.false;
	});
	it('should return false if the nth word does not exist, even with extra whitespaces', function() {
		expect( wordSelect.select('First  second third', 4)).to.be.false;
	});
	it('should return false when the input is not a string', function() {
		expect( wordSelect.select(1, 2)).to.be.false;
	});
	it('should return the 2nd word, even with extra whitespaces', function() {
		expect( wordSelect.select('      First         second      third   ', 2)).to.equal('second');
	});

});
