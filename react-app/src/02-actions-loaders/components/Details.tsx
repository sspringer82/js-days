import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types/User';
import { getUserById } from '../../api/users.api';

const Details: React.FC = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      getUserById(id).then((userFromServer) => setUser(userFromServer));
    }
  }, [id]);

  return (
    <div>
      <h1>Details for {`${user?.firstname} ${user?.lastname}`}</h1>
    </div>
  );
};

export default Details;
