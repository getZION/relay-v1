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
let Subscription = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Subscription.prototype, "id");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Subscription.prototype, "chatId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Subscription.prototype, "contactId");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], Subscription.prototype, "cron");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Subscription.prototype, "amount");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Subscription.prototype, "totalPaid");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Subscription.prototype, "endNumber");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Subscription.prototype, "endDate");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Subscription.prototype, "count");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Subscription.prototype, "ended");
__decorate([
    Column, 
    __metadata('design:type', Boolean)
], Subscription.prototype, "paused");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Subscription.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Subscription.prototype, "updatedAt");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Subscription.prototype, "tenant");
Subscription = __decorate([
    Table({ tableName: 'sphinx_subscriptions', underscored: true }), 
    __metadata('design:paramtypes', [])
], Subscription);
export default Subscription;
//# sourceMappingURL=subscription.js.map