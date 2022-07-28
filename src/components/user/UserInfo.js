import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const GET_USER_INFO = gql`
query UserInfo($id: ID!){
    user(id: $id){
     id,
     name,
     posts {
       data{
         id,
         title,
         body
       }
     }
   }
   }
`

export default function UserInfo() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_USER_INFO, {
        variables: { id: id }
    });
    if(loading) return <p>Loading...</p>;
    return (
        <div>
            <h2>User  {data.user.name} Posts :</h2>
            <hr />
            {data.user.posts.data.map(item =>
                <div key={item.id}>
                    <h5>{item.title}</h5>
                    <p>{item.body}</p>
                </div>
            )}
        </div>
    )
}
