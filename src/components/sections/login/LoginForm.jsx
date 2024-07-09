"use client";

import { Hide, Show } from "@/components/icons/IconsComponents";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [isShowPassword, setIsSowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    if (username || password) {
      setError("");
    }
  }, [username, password]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!password || !username) {
      setError("Всі поля потрібно заповнити");
      return;
    }

    login(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-2/3 mt-10 flex flex-col gap-y-10 relative">
      <div className="flex items-end justify-between">
        <label htmlFor="login" className="">
          Login
        </label>
        <input
          type="text"
          id="login"
          className="w-4/5 outline-none px-4 py-2 border-b border-red"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="flex items-end justify-between relative">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type={isShowPassword ? "text" : "password"}
          id="password"
          className={`w-4/5 outline-none px-4 py-2 border-b border-red `}
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2"
          type="button"
          onClick={() => setIsSowPassword(!isShowPassword)}
        >
          {isShowPassword ? <Show /> : <Hide />}
        </button>
        {error && <p className="absolute -bottom-8 left-0 text-red italic text-lg">{error}</p>}
      </div>

      <button
        type="submit"
        className="w-1/2 h-10 border border-red rounded-2xl text-red text-xl font-semibold hover:bg-red hover:text-white mx-auto"
      >
        Вхід
      </button>
    </form>
  );
};

export default LoginForm;
