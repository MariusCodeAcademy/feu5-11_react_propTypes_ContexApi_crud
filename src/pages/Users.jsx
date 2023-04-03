import { useEffect, useState } from 'react';
import UsersList from '../components/userComps/UsersList';

function Users() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    function getUsers() {
      return fetch('https://dummyjson.com/users')
        .then((resp) => resp.json())
        .then((dataInJs) => {
          console.log('dataInJs ===', dataInJs);
          setUsersArr(dataInJs.users);
        })
        .catch((err) => console.warn(err));
    }
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>Users page</h1>
      <p>welcome to Users page</p>
      <UsersList list={usersArr} />
    </div>
  );
}

export default Users;
