import { z } from "zod";
export declare const apiResponseMessageDtoSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
declare const ApiResponseMessage_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>> & {
    io: "input";
};
export declare class ApiResponseMessage extends ApiResponseMessage_base {
}
export {};
