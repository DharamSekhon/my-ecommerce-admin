// // import clientPromise from '@/lib/mongodb'
// // import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
// // import NextAuth, { getServerSession } from 'next-auth'
// // import GoogleProvider from 'next-auth/providers/google'

// // const adminEmails = ['sekhondharam@gmail.com'];

// // export const authOptions = {
// //   providers: [
// //     // OAuth authentication providers...
// //         GoogleProvider({
// //       clientId: process.env.GOOGLE_ID,
// //       clientSecret: process.env.GOOGLE_SECRET
// //     }),
// //   ],
// //   adapter: MongoDBAdapter(clientPromise),
// //   callbacks: {
// //     session: ({session,token,user}) => {
// //       if (adminEmails.includes(session?.user?.email)) {
// //         return session;
// //       } else {
// //         return false;
// //       }
    
// //     },
// //   },
// // };

// // export default NextAuth(authOptions);

// // export async function isAdminRequest(req,res) {
// //   const session = await getServerSession(req,res,authOptions);
  
// //   if (!adminEmails.includes(session?.user?.email)) {
// //     res.status(401);
// //     req.end();
// //     throw 'not an admin';
// //   }
// // }


// //final
// import NextAuth, {getServerSession} from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";
// import {Admin} from "@/models/Admin";
// import {mongooseConnect} from '@/lib/mongoose';

// async function isAdminEmail(email) {
//   // return true;
//   mongooseConnect();
//   return !! (await Admin.findOne({email}));
// }

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),

    
    


//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     session: async ({session,token,user}) => {
//       if (await isAdminEmail(session?.user?.email)) {
//         return session;
//       } else {
//         return false;
//       }
//     },
//   },
// };

// export default NextAuth(authOptions);

// export async function isAdminRequest(req,res) {
//   const session = await getServerSession(req,res,authOptions);
//   if (!(await isAdminEmail(session?.user?.email))) {
//     res.status(401);
//     res.end();
//     throw 'not an admin';
//   }
// }



// //try
// // pages/api/auth/[...nextauth].js
// // import NextAuth, { getServerSession } from 'next-auth';
// // import GoogleProvider from 'next-auth/providers/google';
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// // import clientPromise from '@/lib/mongodb';
// // import { Admin } from '@/models/Admin';
// // import { mongooseConnect } from '@/lib/mongoose';
// // import mongoose from 'mongoose';

// // async function isAdminEmail(email) {
// //   let connection;
// //   try {
// //     connection = await mongooseConnect();
// //     const user = await Admin.findOne({ email });
// //     return !!user;
// //   } finally {
// //     if (connection && connection.close) {
// //       await connection.close();
// //     }
// //   }
// // }

// // export const authOptions = {
// //   providers: [
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_ID,
// //       clientSecret: process.env.GOOGLE_SECRET,
// //     }),
// //     CredentialsProvider({
// //       credentials: {
// //         email: { label: 'Email', type: 'text' },
// //         password: { label: 'Password', type: 'password' },
// //       },
// //       authorize: async (credentials) => {
// //         let connection;
// //         try {
// //           connection = await mongooseConnect();

// //           // Validate the credentials against your user database
// //           const user = await Admin.findOne({ email: credentials.email });

// //           if (user && user.password === credentials.password) {
// //             return Promise.resolve({ email: user.email });
// //           } else {
// //             return Promise.resolve(null);
// //           }
// //         } finally {
// //           if (connection && connection.close) {
// //             await connection.close();
// //           }
// //         }
// //       },
// //     }),
// //   ],
// //   adapter: MongoDBAdapter(clientPromise),
// //   callbacks: {
// //     session: async ({ session, token, user }) => {
// //       if (await isAdminEmail(session?.user?.email)) {
// //         return session;
// //       } else {
// //         return false;
// //       }
// //     },
// //   },
// // };

// // export default NextAuth(authOptions);

// // export async function isAdminRequest(req, res) {
// //   const session = await getServerSession(req, res, authOptions);
// //   if (!(await isAdminEmail(session?.user?.email))) {
// //     res.status(401);
// //     res.end();
// //     throw 'not an admin';
// //   }
// // }



import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import {Admin} from "@/models/Admin";
import {mongooseConnect} from '@/lib/mongoose';
import RedditProvider from "next-auth/providers/reddit";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";






async function isAdminEmail(email) {
  mongooseConnect();
  return !! (await Admin.findOne({email}));
}

export const authOptions = {
  secret : process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    
    
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({session,token,user}) => {
      if (await isAdminEmail(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req,res) {
  const session = await getServerSession(req,res,authOptions);
  if (!(await isAdminEmail(session?.user?.email))) {
    res.status(401);
    res.end();
    throw 'not an admin';
  }
}
