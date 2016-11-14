define(["require", "exports", "./index"], function (require, exports, index_1) {
    "use strict";
    let isDevelopment = window.location.host.startsWith("localhost");
    let authority = isDevelopment
        ? "http://localhost:12345"
        : "https://zamboni-auth.azurewebsites.net";
    let host = isDevelopment
        ? "http://localhost:9000"
        : "https://zamboni-app.azurewebsites.net";
    class OpenIdConnectConfiguration {
        constructor() {
            this.loginRedirectModuleId = "home";
            this.logoutRedirectModuleId = "home";
            this.userManagerSettings = {
                authority: authority,
                client_id: "Aurelia.OpenIdConnect",
                filterProtocolClaims: true,
                loadUserInfo: true,
                post_logout_redirect_uri: `${host}/signout-oidc`,
                redirect_uri: `${host}/signin-oidc`,
                response_type: "id_token token",
                scope: "openid email roles profile",
                userStore: new index_1.WebStorageStateStore("oidc", window.localStorage),
            };
        }
    }
    exports.OpenIdConnectConfiguration = OpenIdConnectConfiguration;
});
//# sourceMappingURL=open-id-connect-configuration.js.map