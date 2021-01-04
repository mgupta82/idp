package com.test.saml.sp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.saml.provider.provisioning.SamlProviderProvisioning;
import org.springframework.security.saml.provider.service.ServiceProviderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

    private SamlProviderProvisioning<ServiceProviderService> provisioning;

    @Autowired
    public void setSamlService(SamlProviderProvisioning<ServiceProviderService> provisioning) {
        this.provisioning = provisioning;
    }

    @RequestMapping(value = {"/", "/index", "/logged-in"})
    public String home() {
        System.out.println("Example Service Provider Application - You are logged in!");
        return "logged-in";
    }

}
