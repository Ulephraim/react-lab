/** @format */

import { useState } from 'react';
import DashBoard from './DashBoard';
import { DashboardContext } from './context';

export interface User {
  isSubscribed: boolean;
  name: string;
}

export default function Index() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'Youtube User',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <DashBoard />
      </DashboardContext.Provider>
    </div>
  );
}
