import { useEffect, useState } from 'react';
import UsersList from '../components/userComps/UsersList';
import Grid from '../components/ui/grid/Grid';
import UserAside from '../components/userComps/UserAside';

function Users() {
  const [usersArr, setUsersArr] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

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
    const foundUser = usersArr.find((uObj) => uObj.id === idLogin);
    if (!foundUser) {
      throw new Error('nerastas login useris');
    }
    setLoggedInUser(foundUser);
  }

  return (
    <div className="container">
      <h1>Users page</h1>
      <p>welcome to Users page</p>
      <h2>logged in: {loggedInUser.firstName}</h2>
      <Grid cols={2}>
        <UsersList list={usersArr} onLogin={loginUserHandler} />
        <UserAside email={loggedInUser.email} />
      </Grid>
    </div>
  );
}

export default Users;
