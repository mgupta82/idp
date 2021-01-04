# IDP

https://codetinkering.com/saml2-spring-security-5-2-tutorial/

## sample-idp 

Create APP and enable SAML

IDP Login : http://localhost:9091/sample-idp/saml/idp/select

Metadata Endpoint:
http://localhost:9091/sample-idp/saml/idp/metadata

Application Callback URL (Assertion Service Url):
http://localhost:9090/sample-sp/saml/sp/SSO/alias/boot-sample-sp

IDP initiated login:
http://localhost:9091/sample-idp/saml/idp/init?sp=spring.security.saml.sp.id

## sample-sp

SP login:
http://localhost:9090/sample-sp
=> http://localhost:9090/sample-sp/saml/sp/select

SP metadata url:
http://localhost:9090/sample-sp/saml/sp/metadata

SP initiated login:
http://localhost:9090/sample-sp/saml/sp/discovery/saml/sp/discovery?idp=spring.security.saml.idp.id

Logout URL:
http://localhost:9090/sample-sp/saml/sp/logout/alias/boot-sample-sp


