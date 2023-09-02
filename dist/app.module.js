"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const user_model_1 = require("./user/user.model");
const middleware_service_1 = require("./middleware/middleware.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(middleware_service_1.MiddlewareService)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_module_1.MongooseModule.forRoot(process.env.MONGODB_URL, {
                connectionFactory: (connection, name) => {
                    console.log('mongoose is connecting', name);
                    return connection;
                },
            }),
            user_module_1.UserModule,
            mongoose_module_1.MongooseModule.forFeature([{ name: 'User', schema: user_model_1.UserSchema }]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, middleware_service_1.MiddlewareService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map