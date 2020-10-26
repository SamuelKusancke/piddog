"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    email: String,
    number: String
});
var User = mongoose_1.model('users', UserSchema);
exports.default = User;
