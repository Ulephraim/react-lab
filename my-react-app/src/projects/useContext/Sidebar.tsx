/** @format */

import { useUserContext } from './context';

const Sidebar = () => {
  const user = useUserContext();
  return (
    <div>
      <div>{user.name}</div>
      <div> Subscription status: {user.isSubscribed}</div>
    </div>
  );
};

export default Sidebar;
