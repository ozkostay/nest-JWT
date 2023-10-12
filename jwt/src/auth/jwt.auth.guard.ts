import {ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    public canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
    public handleRequest(err, user, info) {
        console.log('handleRequest in jwt.auth.guards === user:', user);
        console.log('handleRequest in jwt.auth.guards === err:', err);
        console.log('handleRequest in jwt.auth.guards === info:', info);
        if (err) {
            throw err;
        }
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}