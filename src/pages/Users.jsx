import { useEffect, useState } from 'react';
import UsersList from '../components/userComps/UsersList';
import Grid from '../components/ui/grid/Grid';

function Users() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    function getUsers() {
      return fetch('https://dummyjson.com/users')
        .then((resp) => resp.json())
        .then((dataInJs) => {
          console.log('dataInJs ===', dataInJs);
          setUsersArr(dataInJs.users.slice(0, 6));
        })
        .catch((err) => console.warn(err));
    }
    getUsers();
  }, []);

  function loginUserHandler(idLogin) {
    console.log('loginUserHandler', idLogin);
  }

  return (
    <div className="container">
      <h1>Users page</h1>
      <p>welcome to Users page</p>
      <Grid cols={2}>
        <UsersList list={usersArr} onLogin={loginUserHandler} />
        <aside>Users info</aside>
      </Grid>
    </div>
  );
}

export default Users;
