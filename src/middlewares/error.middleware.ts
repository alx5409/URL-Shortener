import type { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: any,
    _req: Request,          // Unused parameter
    res: Response,
    _next: NextFunction     // Unused parameter
 ) {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
}