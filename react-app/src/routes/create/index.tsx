import { createFileRoute } from '@tanstack/react-router';
import UserForm from '../../components/UserForm';

export const Route = createFileRoute('/create/')({
  component: Create,
});

function Create() {
  <div>
    <h1>Create a new User</h1>
    <UserForm />
  </div>;
}
