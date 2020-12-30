import React from "react";
import axios from "axios";

const UseEffectRender = () => {
  const [user, setUser] = React.useState(null);
  const fetchJson = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res.data;
  };
  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJson();
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
