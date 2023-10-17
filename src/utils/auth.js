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
  
            return user;
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
  };