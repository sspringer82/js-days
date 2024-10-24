import { useEffect } from 'react';
import { getUserById } from '../../api/users.api';
import { useParams } from 'react-router-dom';

const Form: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
  }, [id]);

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Create New User'}</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" />
        </div>
        <button type="submit">{id ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  );
};

export default Form;
