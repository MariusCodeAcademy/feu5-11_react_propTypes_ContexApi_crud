import { useContext, useEffect, useState } from 'react';
import UsersList from '../components/userComps/UsersList';
import Grid from '../components/ui/grid/Grid';
import UserAside from '../components/userComps/UserAside';
import { UserContext } from '../store/UserContext';

function Users() {
  const [usersArr, setUsersArr] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  const userCtx = useContext(UserContext);

  useEffect(() => {
    function getUsers() {
      return fetch('https://dummyjson.com/users')
        .then((resp) => resp.json())
        .then((dataInJs) => {
          console.log('dataInJs ===', dataInJs);
          setUsersArr(dataInJs.users.slice(0, 6));
          // set user count in context
          userCtx.setUserCount(usersArr);
          console.log('usersArr ===', usersArr);
          // userCtx.setUserCount(dataInJs.users.slice(0, 6).length);
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
    userCtx.setEmailinContex(foundUser.email);
  }

  const userCount = usersArr.length;

  return (
    <div className="container">
      <h1>Users page</h1>
      <p>welcome to Users page</p>
      <h2>logged in: {loggedInUser.firstName}</h2>
      <Grid cols={2}>
        <UsersList list={usersArr} onLogin={loginUserHandler} />
        <UserAside email={loggedInUser.email} userCount={userCount} />
      </Grid>
    </div>
  );
}

export default Users;
