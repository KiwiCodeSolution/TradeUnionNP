import { useSession } from "next-auth/react";

const useAuth = () => {
  const { data: session, status } = useSession();
  const token = session?.user?.token;
  const username = session?.user?.username;

  return { session, status, token, username };
};

export default useAuth;
