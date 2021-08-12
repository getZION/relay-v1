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
let Message = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Message.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "uuid");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "chatId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "type");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "sender");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "receiver");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Message.prototype, "amount");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Message.prototype, "amountMsat");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "paymentHash");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "paymentRequest");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Message.prototype, "date");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Message.prototype, "expirationDate");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "messageContent");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "remoteMessageContent");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "status");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "statusMap");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "parentId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Message.prototype, "subscriptionId");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "mediaKey");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "mediaType");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "mediaToken");
__decorate([
    Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }), 
    __metadata('design:type', Boolean)
], Message.prototype, "seen");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Message.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Message.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "senderAlias");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Message.prototype, "senderPic");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "originalMuid");
__decorate([
    Column, 
    __metadata('design:type', String)
], Message.prototype, "replyUuid");
__decorate([
    Column(DataType.INTEGER), 
    __metadata('design:type', Number)
], Message.prototype, "network_type");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Message.prototype, "tenant");
Message = __decorate([
    Table({ tableName: 'sphinx_messages', underscored: true }), 
    __metadata('design:paramtypes', [])
], Message);
export default Message;
/*
ALTER TABLE sphinx_invites ALTER COLUMN invoice TYPE text;
*/ 
//# sourceMappingURL=message.js.map