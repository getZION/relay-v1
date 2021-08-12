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
let Contact = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Contact.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "routeHint");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "publicKey");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "nodeAlias");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "alias");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "photoUrl");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Contact.prototype, "privatePhoto");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Contact.prototype, "isOwner");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }), 
    __metadata('design:type', Boolean)
], Contact.prototype, "deleted");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "authToken");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Contact.prototype, "remoteId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Contact.prototype, "status");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Contact.prototype, "contactKey");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "deviceId");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Contact.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Contact.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Contact.prototype, "fromGroup");
__decorate([
    Column, 
    __metadata('design:type', String)
], Contact.prototype, "notificationSound");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Contact.prototype, "lastActive");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Contact.prototype, "tipAmount");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Contact.prototype, "tenant");
Contact = __decorate([
    Table({ tableName: 'sphinx_contacts', underscored: true }), 
    __metadata('design:paramtypes', [])
], Contact);
export default Contact;
//# sourceMappingURL=contact.js.map