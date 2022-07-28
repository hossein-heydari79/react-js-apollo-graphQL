import React from 'react'
import {useQuery, gql, NetworkStatus} from '@apollo/client'
import {Link} from 'react-router-dom'
import AddUser from './AddUser';

const GET_USERS = gql`
query GetUsers {
    users {
        data {
          id, 
          name,
          company {
            name
          }
        }
    }
}`;

export const UserList = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(GET_USERS, {
        notifyOnNetworkStatusChange: true,
        pollInterval: 55000, //milisecond
    });

    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : error in fetch data</p>;

    return (
        <div>
            <h2>User List</h2>
            <AddUser />
            <hr />
            <button onClick={() => refetch()}>Refresh !</button>
            {data.users.data.map(item => 
                <div key={item.id}>
                    <h4><Link to={`/user/${item.id}`}>{item.name}</Link></h4>
                    <p>company : {item.company.name}</p>
                </div>
                )}
        </div>
    )
}
