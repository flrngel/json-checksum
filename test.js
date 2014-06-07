var test=require ("tape");
var hash=require("./json-hash");
var assert=require("assert");

test("basic functions test",function(assert){
	assert.notDeepEqual({
		"b": "1",
		"a": "2"
	},{
		"a": "1",
		"b": "2"
	});

	assert.deepEqual(hash({
		"b": "2",
		"a": "1"
	}),hash({
		"a": "1",
		"b": "2"
	}));

	assert.end();
});
