import BaseValidator from './base';
var ResetValidator = BaseValidator.create({
    properties: ['newPassword'],
    newPassword: function (model) {
        var p1 = model.get('newPassword'),
            p2 = model.get('ne2Password');

        if (!validator.equals(p1, p2)) {
            model.get('errors').add('ne2Password', 'The two new passwords don\'t match.');
            this.invalidate();
        }

        if (!validator.isLength(p1, 8)) {
            model.get('errors').add('newPassword', 'The password is not long enough.');
            this.invalidate();
        }
    }
});

export default ResetValidator;
