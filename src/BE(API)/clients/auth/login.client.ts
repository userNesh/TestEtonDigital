import { APIRequestContext, request } from "playwright/test"
import { APIResponse } from "playwright/test"
import { LoginRequest } from "./contracts/login.request"


export class LoginClient {
    // privateCredentials: JSON | undefined

    public async loginUser(
        data: LoginRequest
    ): Promise<APIResponse> {
        const apiContext: APIRequestContext = await request.newContext()
        return await apiContext.post(
            `${process.env.URL}/api/login`,
            {
                data
            }
        )
    }

}