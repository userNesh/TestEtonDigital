export class LoginResponse{
    token: string
    refreshtoken: string
   
    constructor(
        token: string,
        refreshtoken: string
    ){
        this.token = token,
        this.refreshtoken = refreshtoken
    }
}