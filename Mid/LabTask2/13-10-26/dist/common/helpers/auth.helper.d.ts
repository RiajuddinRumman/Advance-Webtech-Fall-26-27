import { IRequest } from "@/common/interfaces/request.interface";
import { AuthUser } from "@/common/interfaces/auth-user.interface";
export declare const getCurrentUser: (req: IRequest) => AuthUser | "You are not authenticated" | "Invalid token";
