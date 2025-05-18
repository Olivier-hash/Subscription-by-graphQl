import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const USER_ADDED = gql`
  subscription {
    userAdded {
      id
      name
    }
  }
`;

function UserList() {
  const { data, loading } = useSubscription(USER_ADDED);

  if (loading) return <p>Waiting for new users...</p>;
  return <p>New user: {data.userAdded.name}</p>;
}
