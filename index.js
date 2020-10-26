"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
mongoose_1.default.connect(process.env.MONGOURL || '', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3001);
