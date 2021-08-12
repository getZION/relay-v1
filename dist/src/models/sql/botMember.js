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
BOT CREATOR - store the installers of your bot
*/
let BotMember = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], BotMember.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], BotMember.prototype, "botId");
__decorate([
    Column, 
    __metadata('design:type', String)
], BotMember.prototype, "memberPubkey");
__decorate([
    Column, 
    __metadata('design:type', String)
], BotMember.prototype, "tribeUuid");
__decorate([
    Column, 
    __metadata('design:type', Number)
], BotMember.prototype, "msgCount");
__decorate([
    Column, 
    __metadata('design:type', Date)
], BotMember.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], BotMember.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Number)
], BotMember.prototype, "tenant");
BotMember = __decorate([
    Table({ tableName: 'sphinx_bot_members', underscored: true }), 
    __metadata('design:paramtypes', [])
], BotMember);
export default BotMember;
//# sourceMappingURL=botMember.js.map