import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import connect from "@/utils/db";


export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),  
  
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials) {
          const { email, password } = credentials;
          try {
            await connect();
            const user = await User.findOne({ email });
            if (!user) {
              return null;
            }
  
            const passwordMatch = await bcrypt.compare(password, user.password);
  
            if (!passwordMatch) {
              return null;
            }
  
            return {
              name : user.name,
              email : user.email,
              role : user.role,
              id : user._id
            };
          } catch (error) {
            console.log("Error Next auth: ", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
  
    pages: {
      signIn: "/",
    },
    callbacks: {
      jwt(params){
        if (params.user?.role) {
          params.token.role = params.user.role;
          params.token.id = params.user.id;
        }
        return params.token;
      },    
      session({session , token}){
      if (session.user){
        session.user.id = token.id
        session.user.role = token.role
      }
        return session
      }
  }
}