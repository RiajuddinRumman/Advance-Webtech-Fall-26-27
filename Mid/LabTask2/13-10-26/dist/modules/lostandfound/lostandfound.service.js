"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostandfoundsService = exports.LostandfoundService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const lostandfound_entity_1 = require("./entities/lostandfound.entity");
let LostandfoundService = class LostandfoundService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createLostandfoundDto) {
        try {
            const user = this.userRepository.create(createLostandfoundDto);
            return await this.userRepository.save(user);
        }
        catch (error) {
            return await error;
        }
    }
    async findAll() {
        try {
            return await this.userRepository.find();
        }
        catch (error) {
            return await error;
        }
    }
    async findOne(id) {
        try {
            return await this.userRepository.findOneBy({ id });
        }
        catch (error) {
            return await error;
        }
    }
    async update(id, updateLostandfoundDto) {
        try {
            const employee = await this.userRepository.findOneBy({ id });
            if (!employee) {
                throw new Error(`Lostandfound with ID ${id} not found`);
            }
            Object.assign(employee, updateLostandfoundDto);
            return await this.userRepository.save(employee);
        }
        catch (error) {
            return await error;
        }
    }
    async remove(id) {
        try {
            const employee = await this.userRepository.findOneBy({ id });
            if (!employee) {
                throw new Error(`Employee with ID ${id} not found`);
            }
            return await this.userRepository.remove(employee);
        }
        catch (error) {
            return await error;
        }
    }
};
exports.LostandfoundService = LostandfoundService;
exports.LostandfoundsService = LostandfoundService;
exports.LostandfoundsService = exports.LostandfoundService = LostandfoundService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __param(0, (0, typeorm_2.InjectRepository)(lostandfound_entity_1.Lostandfound)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LostandfoundService);
//# sourceMappingURL=lostandfound.service.js.map