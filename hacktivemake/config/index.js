"use strict"

export const config = {
    port: process.env.PORT || 3001,
    database: {
        host: process.env.HOST || "localhost",
        user: process.env.USER_DB || "root",
        password: process.env.PASSWORD || "123456"
    }
}