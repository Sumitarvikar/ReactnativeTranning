import React, { useState, useEffect } from 'react';
import { fetchUsers } from "../Services/userService";
import { Iuser } from "../Interfaces/interface";

const FetchUserComponent = (WrappedComponent: React.ComponentType<{ users: Iuser[] | null }>) => {
    const HOC: React.FC = () => {
        const [users, setUsers] = useState<Iuser[] | null>(null);
    
        useEffect(() => {
          fetchUsers().then(data => setUsers(data));
        }, []);
    
        return <WrappedComponent users={users} />;
      };
    
      return HOC;
};

export default FetchUserComponent;
