import React, { useEffect, useState } from "react";
import UserTableAdmin from "../components/General/UserTable.component";
import { UserServicePostgresql } from "../../sdk/userServicePostgresql.sdk";

const Admin = () => {
  const [jsonData, setJsonData] = useState([]);
  React.useEffect(() => {
    async function getUsersDB() {
      if (!window.localStorage.getItem("token")) {
        window.location.replace("/");
      }
      const jsonData = await UserServicePostgresql.getUsers(
        window.localStorage.getItem("token")!,
      );
      if (jsonData.status !== "ok") {
        window.location.replace("/");
      }
      setJsonData(jsonData.users);
    }

    getUsersDB();
  }, []);

  return (
    <>
      <UserTableAdmin data={jsonData} />
    </>
  );
};

export default Admin;
