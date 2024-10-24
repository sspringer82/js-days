import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { User } from '../../types/User';
import { createUser, getUserById, updateUser } from '../../api/users.api';

function Form() {
  const [user, setUser] = useState<User>({ firstname: '', lastname: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: fetchedUser } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => {
      if (id === undefined) {
        return null;
      }
      return getUserById(id);
    },
  });

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser]);

  // Mutation for creating a new user
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['users'] }); // Refetch the users list after mutation
      navigate('/list');
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: (data: User) => updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // Refetch the users list after mutation
      navigate('/list');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: User) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      updateUserMutation.mutate(user);
    } else {
      createUserMutation.mutate(user);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Create New User'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  );
}

export default Form;
