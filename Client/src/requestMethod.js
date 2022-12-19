import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTdjNDUwNjVjZmEyYWU4N2FhNTFhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDk2ODgxNCwiZXhwIjoxNjcxMjI4MDE0fQ.mvHg6yhQCxJ3yIogZIeheycS6CptJ-jSCiYZFpB_zZA"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}"`}
})
