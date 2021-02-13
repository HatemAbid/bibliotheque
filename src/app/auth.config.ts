import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: "https://www.google.fr",
  //https://www.linkedin.com/pulse/implicit-flow-authentication-using-angular-ghanshyam-shukla
  //https://github.com/manfredsteyer/angular-oauth2-oidc 

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + "/index.html",

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: "spa",

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: "code",

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: "openid profile email offline_access api",

  showDebugInformation: true
};

// // Url of the Identity Provider
//   issuer: 'https://demo.identityserver.com/identity',

//   // Login Url of the Identity Provider
//   loginurl: 'https://demo.identityserver.com/identity/connect/authorize',

//   // Login Url of the Identity Provider
//   logouturl: 'https://demo.identityserver.com/identity/connect/endsession',


//   // URL of the SPA to redirect the user to after login
//   redirectUri: window.location.origin + '/dashboard.html',

//   // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: 'billing_demo',

//   // set the scope for the permissions the client should request
//   // The first three are defined by OIDC. Also provide user sepecific
//   scope: 'openid profile email billing_demo_api',


// import { AuthConfig } from 'angular-oauth2-oidc';

// export const authCodeFlowConfig: AuthConfig = {
//   issuer: 'https://idsvr4.azurewebsites.net',
//   redirectUri: window.location.origin + '/index.html',
//   clientId: 'spa',
//   responseType: 'code',
//   scope: 'openid profile email offline_access api',
//   showDebugInformation: true,
//   timeoutFactor: 0.01
// };
