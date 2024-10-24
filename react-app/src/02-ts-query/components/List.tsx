import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/users.api';
import { User } from '../../types/User';

const List: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.firstname} ${user.lastname}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
