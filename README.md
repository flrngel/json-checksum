# JSON-checksum

![Travis](https://travis-ci.org/flrngel/json-checksum.svg?branch=master)

calculate your json object checksum (supports: SHA256)

## USAGE

node.js

	npm install json-checksum

amd

	require(["json-checksum"],function(checksum){})

wild front

	<script src="json-checksum.js"></script>

	<script>
		var obj={
			"i": "am sleepy"
		};
		var checksum=checksum(obj);
		console.log(checksum);
	</script>

### Why JSON-checksum is useful?

these two JSON-object below, is different

	{
		"a": "aaaaa",
		"b": "bbbbb"
	}

	{
		"b": "bbbbb",
		"a": "aaaaa"
	}

#### So?

I sorted it

### Why SHA256

Because I want it. need other? fork yourself.

## Note

test yourself. works for me.

# License

MIT
