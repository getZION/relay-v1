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
BOT CREATOR - this handles the webhook and external API
*/
let Bot = class extends Model {
};
__decorate([
    Column({
        type: DataType.TEXT,
        primaryKey: true,
        unique: true,
    }), 
    __metadata('design:type', String)
], Bot.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], Bot.prototype, "uuid");
__decorate([
    Column, 
    __metadata('design:type', String)
], Bot.prototype, "name");
__decorate([
    Column, 
    __metadata('design:type', String)
], Bot.prototype, "secret");
__decorate([
    Column, 
    __metadata('design:type', String)
], Bot.prototype, "webhook");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Bot.prototype, "pricePerUse");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Bot.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Bot.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Bot.prototype, "tenant");
Bot = __decorate([
    Table({ tableName: 'sphinx_bots', underscored: true }), 
    __metadata('design:paramtypes', [])
], Bot);
export default Bot;
//# sourceMappingURL=bot.js.map