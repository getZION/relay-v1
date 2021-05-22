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
import { Table, Column, Model } from 'sequelize-typescript';
let ChatMember = class extends Model {
};
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "chatId");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "contactId");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "role");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "totalSpent");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "totalMessages");
__decorate([
    Column, 
    __metadata('design:type', Date)
], ChatMember.prototype, "lastActive");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "status");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatMember.prototype, "lastAlias");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatMember.prototype, "tenant");
ChatMember = __decorate([
    Table({
        tableName: 'sphinx_chat_members', underscored: true, indexes: [
            { unique: true, fields: ['chat_id', 'contact_id'] }
        ]
    }), 
    __metadata('design:paramtypes', [])
], ChatMember);
export default ChatMember;
//# sourceMappingURL=chatMember.js.map