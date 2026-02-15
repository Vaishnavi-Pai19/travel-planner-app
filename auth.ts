import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const {auth, handlers, signIn, signOut} = NextAuth({      // auth returns info about session of user who's signed in, handlers handle redirecting when user authenticates
    providers: [Github],
    adapter: PrismaAdapter(prisma),
});