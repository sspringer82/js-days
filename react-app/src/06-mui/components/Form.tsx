import { useEffect } from 'react';
import { createUser, getUserById, updateUser } from '../../api/users.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { User } from '../../types/User';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  firstname: z
    .string()
    .min(1, { message: 'Required' })
    .max(10, 'Firstname too long'),
  lastname: z
    .string()
    .min(1, { message: 'Required' })
    .max(10, 'Lastname too long'),
});

const Form: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (id) {
      getUserById(id).then((user) => reset(user));
    }
  }, [id, reset]);

  async function onSubmit(data: User) {
    if (data.id) {
      await updateUser(data);
    } else {
      await createUser(data);
    }
    navigate('/list');
  }

  console.log(errors);

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Create New User'}</h1>
      {(errors.firstname || errors.lastname) && (
        <div>Bitte füllen Sie alle Felder aus!</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">
            First Name:
            <input type="text" {...register('firstname')} />
          </label>
          {errors.firstname && (
            <div style={{ color: 'red' }}>{errors.firstname.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastname">
            Last Name:
            <input type="text" {...register('lastname')} />
          </label>
          {errors.lastname && (
            <div style={{ color: 'red' }}>{errors.lastname.message}</div>
          )}
        </div>
        <button type="submit">{id ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  );
};

export default Form;
