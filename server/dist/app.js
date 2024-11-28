"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/users", users_1.default);
database_1.default
    .sync()
    .then(() => {
    console.log("Database synchronized with Sequelize models.");
})
    .catch((error) => {
    console.error("Database synchronization error:", error);
});
exports.default = app;
