var validators = {
    notEmpty: function(value) {
        return (value) ? true : false;
    },
    isAddress: function(value) {
        return true;
    },
    isEmail: function(value) {
        return false;
    }
}
var validate = {
    current_errors: [],
    check: function(value, message, conditions) {
        var valid = true;
        conditions.forEach(function(condition) {
            if (!validators[condition](value)) {
                valid = false;
            }
        })
        if (!valid) {
            this.current_errors.push({
                "field": value,
                "message": message,
                "requirements": conditions
            })
        }
    },
    errors: function() {
        return this.current_errors;
    },
    valid: function() {
        return (errors.length === 0) ? true : false;
    },
    add_validators: function(validators) {
        if (typeof validators != "Array") {
            validators = [validators];
        }
        validators.forEach(validator, function(v, key) {
            window.validators[(v["key"])] = v;
        });
    }
}




if (typeof module === "object") {
    module.exports = validators;
    module.exports = validation;
}