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
Used for media uploads. When you upload a file,
also upload the symetric key encrypted for each chat member.
When they buy the file, they can retrieve the key from here.

"received" media keys are not stored here, only in Message
*/
let MediaKey = class extends Model {
};
__decorate([
    Column({
        type: DataType.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }), 
    __metadata('design:type', Number)
], MediaKey.prototype, "id");
__decorate([
    Column, 
    __metadata('design:type', String)
], MediaKey.prototype, "muid");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], MediaKey.prototype, "chatId");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], MediaKey.prototype, "receiver");
__decorate([
    Column(DataType.TEXT), 
    __metadata('design:type', String)
], MediaKey.prototype, "key");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], MediaKey.prototype, "messageId");
__decorate([
    Column, 
    __metadata('design:type', Date)
], MediaKey.prototype, "createdAt");
__decorate([
    Column, 
    __metadata('design:type', String)
], MediaKey.prototype, "mediaType");
__decorate([
    Column(DataType.BIGINT), 
    __metadata('design:type', Number)
], MediaKey.prototype, "sender");
__decorate([
    Column, 
    __metadata('design:type', String)
], MediaKey.prototype, "originalMuid");
__decorate([
    Column, 
    __metadata('design:type', Number)
], MediaKey.prototype, "tenant");
MediaKey = __decorate([
    Table({ tableName: 'sphinx_media_keys', underscored: true }), 
    __metadata('design:paramtypes', [])
], MediaKey);
export default MediaKey;
//# sourceMappingURL=mediaKey.js.map