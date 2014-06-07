# JSON-hash

hash your json to sha256

## USAGE

node.js

	npm install json-hash

amd

	require(["json-hash"],function(hash){})

wild front

	<script src="json-hash.js"></script>

	<script>
		var obj={
			"i": "am sleepy"
		};
		var hashed=hash(obj);
		console.log(obj);
	</script>

### Why JSON-hash

hashing these two JSON-object below, is different

	{
		"a": "aaaaa",
		"b": "bbbbb"
	}

	{
		"b": "bbbbb",
		"a": "aaaaa"
	}

### So?

sort it

### Why SHA256

Because I want it.

### W

# License

MIT
