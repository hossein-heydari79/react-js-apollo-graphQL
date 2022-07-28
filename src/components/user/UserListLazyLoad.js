import React from 'react'
import {useLazyQuery, gql, NetworkStatus} from '@apollo/client'
import {Link} from 'react-router-dom'

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

export const UserListLazyLoad = () => {
    const [getUsers, { loading, error, data, refetch, networkStatus }] = useLazyQuery(GET_USERS, {
        notifyOnNetworkStatusChange: true,
        pollInterval: 55000, //milisecond
    });

    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : error in fetch data</p>;

    return (
        <div>
            <h2>User List Lazy Load</h2>
            <button onClick={() => getUsers()}>Show User List</button>
            <button onClick={() => refetch()}>Refresh !</button>
            {data ? data.users.data.map(item => 
                <div key={item.id}>
                    <h4><Link to={`/user/${item.id}`}>{item.name}</Link></h4>
                    <p>company : {item.company.name}</p>
                </div>
                ) : null}
        </div>
    )
}
