"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Company = class Company {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Company.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Company.prototype, "numberOfEmployees", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Company.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Company.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.companies)
], Company.prototype, "user", void 0);
Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
exports.Company = Company;
