package com.prodental.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {

    @RequestMapping("/**/{path:[^\\.]*}")
    public String forwardSpaRoutes() {
        return "forward:/";
    }

}
