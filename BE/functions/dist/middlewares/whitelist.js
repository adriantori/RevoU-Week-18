"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = {
    clientOptionsGlobal: {
        origin: ['https://adriantori-m3.web.app', 'http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Authorization', 'Content-Type'],
    }
};
exports.default = whitelist;
//# sourceMappingURL=whitelist.js.map