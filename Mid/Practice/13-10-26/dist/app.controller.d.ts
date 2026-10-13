import { AppService } from "@/src/app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    healthCheck(): {
        status: string;
        timestamp: string;
    };
}
