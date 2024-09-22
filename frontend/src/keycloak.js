import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://keycloak.local:8080",
  realm: "demo-realm",
  clientId: "react-app",
});

export default keycloak;