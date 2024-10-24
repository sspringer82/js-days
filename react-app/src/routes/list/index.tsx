import { getAllUsers } from '@/api/user';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/list/')({
  component: List,
  loader: async () => {
    return getAllUsers();
  },
});

function List() {
  const users = Route.useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/details/${user.id}`}
            >{`${user.firstname} ${user.lastname}`}</Link>
            {' - '}
            <Link to={`/edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create new user</Link>
    </div>
  );
}
