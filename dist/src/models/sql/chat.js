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
let Chat = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Chat.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "uuid");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "name");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "photoUrl");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Chat.prototype, "type");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Chat.prototype, "status");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "contactIds");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Chat.prototype, "isMuted");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Chat.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Chat.prototype, "updatedAt");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }), 
    __metadata('design:type', Boolean)
], Chat.prototype, "deleted");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Chat.prototype, "groupKey");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Chat.prototype, "groupPrivateKey");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "host");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Chat.prototype, "priceToJoin");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Chat.prototype, "pricePerMessage");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Chat.prototype, "escrowAmount");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Chat.prototype, "escrowMillis");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    }), 
    __metadata('design:type', Boolean)
], Chat.prototype, "unlisted");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Chat.prototype, "private");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "ownerPubkey");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }), 
    __metadata('design:type', Boolean)
], Chat.prototype, "seen");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "appUrl");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "feedUrl");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "meta");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "myPhotoUrl");
__decorate([
    Column, 
    __metadata('design:type', String)
], Chat.prototype, "myAlias");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Chat.prototype, "tenant");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: true
    }), 
    __metadata('design:type', Boolean)
], Chat.prototype, "skipBroadcastJoins");
Chat = __decorate([
    Table({ tableName: 'sphinx_chats', underscored: true }), 
    __metadata('design:paramtypes', [])
], Chat);
export default Chat;
//# sourceMappingURL=chat.js.map