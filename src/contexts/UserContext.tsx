import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { get } from '@/lib/api';
import { LoggedSessionDto } from '@/dtos/user/User';

interface UserContextType {
  sessionData: LoggedSessionDto | null;
  clearSessionData: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [sessionData, setSessionData] = useState<LoggedSessionDto | null>(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const data = await get<LoggedSessionDto>('/user/session');
        setSessionData(data);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };

    fetchSessionData();
  }, []);

  const clearSessionData = () => {
    setSessionData(null);
  };

  return (
    <UserContext.Provider value={{ sessionData, clearSessionData }}>
      {children}
    </UserContext.Provider>
  );
};
