# SSO

https://codetinkering.com/spring-security-saml2-service-provider-example/

## Auth0 

Create APP and enable SAML

IDP Login : https://testlab.au.auth0.com/samlp/K3ysuWCFE6WH2ne94wjC32WYBfdcU11k

Metadata Endpoint:
https://testlab.au.auth0.com/samlp/metadata/K3ysuWCFE6WH2ne94wjC32WYBfdcU11k

Application Callback URL (Assertion Service Url):
http://localhost:9090/sp/login/saml2/sso/sp

Logout Settings:
{
"logout": {
"callback": "http://localhost:9090/sp/logout",
"slo_enabled": true
},
"binding": "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
}

Logout URL:
https://testlab.au.auth0.com/samlp/K3ysuWCFE6WH2ne94wjC32WYBfdcU11k/logout

## Service Provider

SP login:
http://localhost:9090/sp/login

SP metadata url:
http://localhost:9090/sp/saml2/service-provider-metadata/sp


