import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        console.log("Відправляємо запит на авторизацію");
        try {
          if (!credentials?.username || !credentials.password) return null;

          // Запит до бекенду на авторизацію
          const response = await axios.post(`${BaseURL}auth/login`, {
            username: credentials.username,
            password: credentials.password,
          });

          if (response.status === 200) {
            console.log("Авторизація успішна, статус 200");

            return {
              username: credentials.username,
            };
          }

          return null;
        } catch (error) {
          console.error("Помилка авторизації:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Callback для JWT
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Зберігаємо дані користувача
      }
      return token;
    },
    // Callback для сесії
    async session({ session, token }) {
      session.user = token.user; // Додаємо дані користувача у сесію
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

// import Credentials from "next-auth/providers/credentials";
// import { users } from "@/data/users";

// export const authConfig = {
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email", required: true },
//         password: { label: "Password", type: "password", required: true },
//       },
//       async authorize(credentials) {
//         try {
//           if (!credentials?.email || !credentials.password) return null;

//           const currentUser = users.find(user => user.email === credentials.email);

//           console.log("currentUser_______", currentUser);
//           if (currentUser && currentUser.password === credentials.password) {
//             const { password, ...userWithoutPass } = currentUser;
//             return userWithoutPass;
//           }

//           return null;
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/signin",
//   },
//   // basePath: "/api/auth", //
// };
