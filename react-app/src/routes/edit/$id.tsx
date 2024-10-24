import { getUser } from '@/api/user';
import UserForm from '@/components/UserForm';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/edit/$id')({
  loader: async ({ params }) => {
    return getUser(params.id);
  },
  component: Edit,
});

function Edit() {
  const user = Route.useLoaderData();

  return (
    <div>
      <h1>Edit {`${user.firstname} ${user.lastname}`}</h1>
      <UserForm user={user} />
    </div>
  );
}
