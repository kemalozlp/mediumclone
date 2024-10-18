const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aXZ6d250Y3V2bm9maG5nbXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTQxMTcsImV4cCI6MjA0NDM5MDExN30.9AyrykqGoVmUta9BoR4qSYpHX8HlH2cKZqdXd3kuYmw"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}