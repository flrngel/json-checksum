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

	assert.deepEqual(checksum("1234"),"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4");

	assert.end();
});
