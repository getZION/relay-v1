var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Invite = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Invite.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], Invite.prototype, "inviteString");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Invite.prototype, "invoice");
__decorate([
    Column, 
    __metadata('design:type', String)
], Invite.prototype, "welcomeMessage");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Invite.prototype, "contactId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Invite.prototype, "status");
__decorate([
    Column(DataType.DECIMAL(10, 2)), 
    __metadata('design:type', Number)
], Invite.prototype, "price");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Invite.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Invite.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Invite.prototype, "tenant");
Invite = __decorate([
    Table({ tableName: 'sphinx_invites', underscored: true }), 
    __metadata('design:paramtypes', [])
], Invite);
export default Invite;
//# sourceMappingURL=invite.js.map