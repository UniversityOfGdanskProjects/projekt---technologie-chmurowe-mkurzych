import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

function Hello() {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <h2>Hello</h2>
      {initialized && keycloak.authenticated && (
        <p>Hello, {keycloak.tokenParsed.preferred_username}!</p>
      )}
    </div>
  );
}

export default Hello;
