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
/*
TRIBE OWNER - bots installed as "contacts" in a tribe
*/
let ChatBot = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], ChatBot.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatBot.prototype, "chatId");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "botUuid");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatBot.prototype, "botType");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "botPrefix");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "botMakerPubkey");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "botMakerRouteHint");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "msgTypes");
__decorate([
    Column, 
    __metadata('design:type', String)
], ChatBot.prototype, "meta");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatBot.prototype, "pricePerUse");
__decorate([
    Column, 
    __metadata('design:type', Date)
], ChatBot.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], ChatBot.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Number)
], ChatBot.prototype, "tenant");
ChatBot = __decorate([
    Table({
        tableName: 'sphinx_chat_bots', underscored: true, indexes: [
            { unique: true, fields: ['chat_id', 'bot_uuid'] }
        ]
    }), 
    __metadata('design:paramtypes', [])
], ChatBot);
export default ChatBot;
//# sourceMappingURL=chatBot.js.map