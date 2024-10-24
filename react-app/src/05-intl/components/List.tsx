import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/users.api';
import { User } from '../../types/User';
import { useTranslation } from 'react-i18next';

const List: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h1>
        {t('list')} {t('firstName')}
      </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.firstname} ${user.lastname}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
