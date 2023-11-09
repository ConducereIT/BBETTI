import React from 'react';
import Header from "./Header";

const UserTableAdmin = ( {data}:any ) => {
  return (
    data.length!=0 ?(
      <>
      <Header/>
    <div className="mt-20">
      <h2>User Table</h2>
      <table>
        <thead>
        <tr >
          <th>User ID</th>
          <th>Email</th>
          <th>Vote Fata</th>
          <th>Vote Baiat</th>
          <th>Vote Fata Name</th>
          <th>Vote Baiat Name</th>
          <th>Admin</th>
          <th>Verified</th>
          <th>Cod confirmare email</th>
        </tr>
        </thead>
        <tbody>
        {data.map((user:any, index:any) => (
          <tr key={index} className="text-white">
            <td>{index}</td>
            <td>{user.email}</td>
            <td>{user.voteFata ? 'Da' : 'Nu'}</td>
            <td>{user.voteBaiat ? 'Da' : 'Nu'}</td>
            <td>{user.voteFataName}</td>
            <td>{user.voteBaiatName}</td>
            <td>{user.admin || 'N/A'}</td>
            <td>{user.verified ? 'Da' : 'Nu'}</td>
            <td>{user.tokenConfirmEmail}</td>
          </tr>
        ))
        }
        </tbody>
      </table>
    </div>
      </>):(<div>Salut</div>)

  );
};

export default UserTableAdmin;
