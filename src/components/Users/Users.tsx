import React, {FC, useState, useMemo} from 'react'
import { USERS } from './usersData'
import { IUser } from './IUser';
 

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>(USERS);
    const [search, setSearch] = useState('');
    const[showUserForm, setShowUserForm] = useState(false);
    const deleteUser = (id:number) => {
        const isDelete = window.confirm("Do you realy delete this user?");
    }
    const searchedUsers = useMemo( () => {
      if (search) {
        return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
      }
      return users;
    }, [search, users]);
    console.log(searchedUsers);
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        onChange={(event) => setSearch(event.target.value)}
  />
          </div>

  <button className="btn btn-success mt-3 mb-3" 
        onClick={() => setShowUserForm(!showUserForm)}
  >
        Add new User
  </button>

  {showUserForm && 
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

  </div>
  
  <button type="submit" className="btn btn-primary">Add</button>
  </form>
  }

  

<div className="row row-cols-1 row-cols-md-3 g-4">Add
    {users.length 
    ? 
    searchedUsers.map(user => 
  <div className="col" key={user.id}>
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{`№${user.id} - ${user.name}`}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">City: {user.address.city}</p>
        <p className="card-text">Company: {user.company.name}</p>
      </div>
      <div className="card-footer">
       <button className="btn btn-danger" 
            onClick ={() => deleteUser(user.id)}
       >
           Delete
        </button>
      </div>
    </div>
  </div>
)
:
<h2>Users not exist</h2>
}
  </div>
  </>
)
}

export default Users
=======
    const searchUser = (event: string) => {
        return setUsers(users.filter(user => user.name.toLowerCase().includes(event.toLowerCase())));
    }
    return (
        <>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Search</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(event) => searchUser(event.target.value)} />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {users.length ? 
                users.map(user => {
                    return (
                        <div className="col" key={user.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">№{user.id} - {user.name}</h5>
                                    <p className="card-text">Email: {user.email}</p>
                                    <p className="card-text">City: {user.address.city}</p>
                                    <p className="card-text">Name: {user.company.name}</p>
                                </div>
                                <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            : 
            <h2>Users not exist</h2>
            }
        </div>
        </>
    );
};

export default Users;
>>>>>>> a2f7dc62508baa853395148a64ffe2fc5cf5ea76
