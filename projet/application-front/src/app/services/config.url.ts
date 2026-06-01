import {environment} from "../../environments/environment";

const BASE_URL : string = environment.apiUrl;
export const AUTH_URL: string = `${BASE_URL}/auth`;
export const URL_KNWOLEDGE: string = `${BASE_URL}/general-knwoledge`;
export const URL_KNOWLEDGE_RESPONSE: string = `${URL_KNWOLEDGE}/response`
export const URL_KNOWLEDGE_FILTERED: string = `${URL_KNWOLEDGE}/filtered`
export const URL_USER: string =  `${BASE_URL}/user`;
export const URL_USER_ADMIN: string =  `${BASE_URL}/user/admin`;
export const URL_USER_WITH_ID: string =  `${BASE_URL}/user/admin/id`;
export const URL_USER_RESPONSE_ADD: string =  `${BASE_URL}/user/addResponse`;

