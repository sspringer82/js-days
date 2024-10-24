import { useEffect, useState } from 'react';
import { Form as RouterForm, useParams } from 'react-router-dom';

function Form() {
  const { id } = useParams();

  // get data from loader
  const loadedUser = null as any;

  const [firstname, setFirstname] = useState(loadedUser?.firstname || '');
  const [lastname, setLastname] = useState(loadedUser?.lastname || '');

  useEffect(() => {
    if (loadedUser) {
      setFirstname(loadedUser.firstname);
      setLastname(loadedUser.lastname);
    }
  }, [loadedUser]);

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Create New User'}</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  );
}

export default Form;
