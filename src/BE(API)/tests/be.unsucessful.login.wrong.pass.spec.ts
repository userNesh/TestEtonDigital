import { expect, test } from "playwright/test";
import { LoginRequest } from "../clients/auth/contracts/login.request";
import { LoginResponse } from "../clients/auth/contracts/login.response";
import { LoginClient } from "../clients/auth/login.client"


test('should not successfully log in, wrong Pass', async ({}) => {

    const loginClient = new LoginClient()

    const loginRequest = new LoginRequest(
        process.env.LOGIN_EMAIL!,
        'WrongPassword123'
    )

    const response = await loginClient.loginUser(
        loginRequest
    )
    const readResponse: LoginResponse = await response.json()
    expect.soft(response.status()).toEqual(401)
})