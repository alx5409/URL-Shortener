import 'express';

declare module 'express' {
    // Extending the Request interface so that it includes a 'user' property
    export interface Request {
        user?: {
        userId: string;
        email: string;
        password?: string;
        };
    }
}