var test=require ("tape");
var checksum=require("./json-checksum");
var assert=require("assert");

test("basic functions test",function(assert){
	assert.notDeepEqual({
		"b": "1",
		"a": "2"
	},{
		"a": "1",
		"b": "2"
	});

	assert.deepEqual(checksum({
		"b": "2",
		"a": "1"
	}),checksum({
		"a": "1",
		"b": "2"
	}));

	assert.end();
});
