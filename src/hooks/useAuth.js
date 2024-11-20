import { useSession } from "next-auth/react";

const useAuth = () => {
  const { data: session, status } = useSession();
  const token = session?.user?.token;

  return { session, status, token };
};

export default useAuth;
