import { getAllUsers } from '../../api/users.api';
import { useSuspenseQuery } from '@tanstack/react-query';

const List: React.FC = () => {
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   getAllUsers().then((users) => setUsers(users));
  // }, []);

  const { data: users } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

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
