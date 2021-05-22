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
let Timer = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Timer.prototype, "id");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Timer.prototype, "chatId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Timer.prototype, "msgId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Timer.prototype, "millis");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Timer.prototype, "receiver");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Timer.prototype, "amount");
__decorate([
    Column, 
    __metadata('design:type', Number)
], Timer.prototype, "tenant");
Timer = __decorate([
    Table({ tableName: 'sphinx_timers', underscored: true }), 
    __metadata('design:paramtypes', [])
], Timer);
export default Timer;
//# sourceMappingURL=timer.js.map