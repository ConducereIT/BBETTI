import React, { useEffect, useState } from "react";
import { User } from "../sdk/user.sdk";

const Login = () => {
  const [element, setElement] = useState<string | null>(null);

  useEffect(() => {
    const fetchElement = async () => {
      const el = await User.helloWorld();
      setElement(el);
    };

    fetchElement();
  }, []);

  return <div>{element}</div>;
};

export default Login;
