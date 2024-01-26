import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ message, redirectPath }) {
  //
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectPath) {
      const timeoutId = setTimeout(() => {
        navigate(redirectPath);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [redirectPath, navigate]);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className="text-3xl font-bold color-red">Something went wrong!</h1>
      <h3>{message}</h3>
    </div>
  );
}
