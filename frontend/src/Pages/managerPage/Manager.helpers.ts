import { Context, createContext } from 'react';

export const ManagerIDContext: Context<any> = createContext({});

export const sortClients = (clients, id) => clients.sort((a, b) => {
    const aServed = a.manager === id;
    const bServed = b.manager === id;
    if (aServed) {
        if (bServed && a.id > b.id){
            return 1;
        }
        return -1;
    }
    if (bServed){
        return 1;
    }
    if (a.id < b.id){
        return -1;
    }
    return 1;
});
