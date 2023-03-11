

export interface User {
    id: string
name: string
email: string
emailVerified: any
image: string
accounts: any
sessions: any
createdAt: any
updatedAt: any
        

export interface Session {
    id: string
sessionToken: string
userId: string
expires: any
user: any
        

export interface Account {
    id: string
userId: string
type: string
provider: string
providerAccountId: string
refresh_token: string
access_token: string
expires_at: any
token_type: string
scope: string
id_token: string
session_state: string
user: any
        
