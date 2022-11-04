import { MiddlewareHandlerContext } from "$fresh/server.ts"

export function handler(
    req: Request,
    ctx: MiddlewareHandlerContext<null>
    ) {
        const userId = null;
    if (userId) {
        ctx.state.userId = Number(userId.split(".")[0]);
    }
    return ctx.next();
}
