import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id,
        name,
        username,
        email
    }
  }
`;
export default function AddUser() {
  const [addUser, { data }] = useMutation(ADD_USER);
  return (
    <div>
      <h2>Add New User</h2>
      <button onClick={() =>
        addUser({ variables: { input: { name: 'hossein', username: 'heydari', email: 'hosseinheydari.dev@gmail.com' } } })}>Save</button>
    </div>
  )
}
