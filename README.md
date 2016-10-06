# skelleton-data-validation
Node.js / Javascript form and data Validation.  Works independently or with services like Express.


Initialize the validator.

```
validate.init();
````


Check against data.

```
validate.check(
	"contest_slug", 
	req.body.contest_slug, 
	"No contest has been selected.", 
	["notEmpty"]
);

validate.check(
	"name", 
	req.body.name, 
	"You must enter your name.", 
	["notEmpty"]
);

validate.check(
	"email", 
	req.body.email, 
	"You must enter a valid email.", 
	["notEmpty", "isEmail"]
);

validate.check(
	"zip_postal_code", 
	req.body.zip_postal_code, 
	"You must enter a valid postal code.", 
	["notEmpty", "isPostalCode"]
);

if (!validate.valid()) {
    // Data Does not validate
    console.log({ success: false,  errors: validate.errors() })
} else {
	// Data validates
	console.log({ success: true})
}

```


Add your own validations.  It excepts a sigle validator or an array of them.

```
validate.add_validators(
	{
		notEmpty: function(value) {
			return (value != "") ? true : false;
		}
	}
);
```