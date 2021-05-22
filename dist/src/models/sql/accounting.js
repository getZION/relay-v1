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
let Accounting = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], Accounting.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', Date)
], Accounting.prototype, "date");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "pubkey");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "routeHint");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "onchainAddress");
__decorate([
    Column(DataType.DECIMAL), 
    __metadata('design:type', Number)
], Accounting.prototype, "amount");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "sourceApp");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "status");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "error");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "chanId");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "fundingTxid");
__decorate([
    Column, 
    __metadata('design:type', String)
], Accounting.prototype, "onchainTxid");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "commitFee");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "localReserve");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "remoteReserve");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], Accounting.prototype, "extraAmount");
Accounting = __decorate([
    Table({ tableName: 'sphinx_accountings', underscored: true }), 
    __metadata('design:paramtypes', [])
], Accounting);
export default Accounting;
//# sourceMappingURL=accounting.js.map