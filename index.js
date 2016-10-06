var validate = {
    current_errors: [],
    current_checks: [],
    init: function() {
        var self = this;
        self.current_errors = [];
        self.current_checks = [];
    },
    check: function(field, value, message, conditions) {
        var self = this;
        self.current_checks.push({
            field: field,
            value: value,
            message: message,
            conditions: conditions
        });
    },
    errors: function() {
        var self = this;
        return self.current_errors;
    },
    valid: function() {
        var self = this;
        self.current_checks.forEach(function(cc) {
            console.log(cc);
            var valid = true;
            cc.conditions.forEach(function(condition) {
                if (typeof value === "undefined") {
                    value = "";
                }
                if (!validators[condition](cc.value)) {
                    valid = false;
                }
                if (!valid) {
                    self.current_errors.push({
                        "field": cc.field,
                        "value": cc.value,
                        "message": cc.message,
                        "requirements": cc.conditions
                    });
                }
            });
        });
        console.log("Response", self.current_errors);
        return (self.current_errors.length === 0) ? true : false;
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
var validators = {
    notEmpty: function(value) {
        return (value != "") ? true : false;
    },
    isAddress: function(value) {
        return true;
    },
    isEmail: function(value) {
        var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return regex.test(value);
    },
    isPostalCode: function(value) {
        var regex = /^[A-Z]\d[A-Z]( )?\d[A-Z]\d$/i;
        return regex.test(value);
    }
}
if (typeof module === "object") {
    module.exports = validators;
    module.exports = validate;
}