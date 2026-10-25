"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostandfoundModule = void 0;
const common_1 = require("@nestjs/common");
const lostandfound_service_1 = require("./lostandfound.service");
const lostandfound_controller_1 = require("./lostandfound.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lostandfound_entity_1 = require("./entities/lostandfound.entity");
let LostandfoundModule = class LostandfoundModule {
};
exports.LostandfoundModule = LostandfoundModule;
exports.LostandfoundModule = LostandfoundModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lostandfound_entity_1.Lostandfound])],
        controllers: [lostandfound_controller_1.LostandfoundController],
        providers: [lostandfound_service_1.LostandfoundsService],
    })
], LostandfoundModule);
//# sourceMappingURL=lostandfound.module.js.map