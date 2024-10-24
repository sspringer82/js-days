import { useLoaderData } from 'react-router-dom';
import { User } from '../../types/User';

const Details: React.FC = () => {
  const user = useLoaderData() as User;
  return (
    <div>
      <h1>Details for {`${user?.firstname} ${user?.lastname}`}</h1>
    </div>
  );
};

export default Details;
