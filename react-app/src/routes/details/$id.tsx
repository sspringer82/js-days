import { getUser } from '@/api/user';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/details/$id')({
  component: Details,
  loader: async ({ params }) => {
    return getUser(params.id);
  },
});

function Details() {
  const user = Route.useLoaderData();

  return (
    <div>
      <h1>{`${user.firstname} ${user.lastname}`}</h1>
      <Link to="/list">Back to list</Link>
    </div>
  );
}
