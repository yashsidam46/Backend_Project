class ApiResponce {
    constructor(statusCode , data , message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message  = message
        this.success = statusCode < 400
    }
}

/* 
Here is the ultimate status code cheat sheet, stripped down to the bare essentials:

🟢 2xx: Success
200 (OK): Success! Data fetched/updated.

201 (Created): Success! New item created (via POST).

204 (No Content): Success! Nothing to return (via DELETE).

🟡 3xx: Redirection
301 (Permanent): Moved forever.

304 (Not Modified): Use your browser cache (saves bandwidth).

🟠 4xx: Client Error (Your Fault)
400 (Bad Request): Missing or bad data sent by you.

401 (Unauthorized): You aren't logged in / missing API key.

403 (Forbidden): Logged in, but you don't have permission.

404 (Not Found): URL or data doesn't exist.

409 (Conflict): Duplicate data (e.g., email already registered).

429 (Too Many Requests): You're rate-limited for spamming.

🔴 5xx: Server Error (Their Fault)
500 (Internal Error): The backend code crashed.

502 (Bad Gateway): Server infrastructure/proxy failed.

503 (Unavailable): Server overloaded or down for maintenance.

504 (Gateway Timeout): Server took too long to respond.
*/