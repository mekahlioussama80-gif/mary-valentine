package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ValentineController {
    
    @GetMapping("/")
    public String home() {
        return "index";
    }
    
    @GetMapping("/no")
    public String noPage() {
        return "no";
    }
    
    @GetMapping("/gifts")
    public String gifts() {
        return "gifts";
    }
    
    @GetMapping("/gift1")
    public String gift1() {
        return "gift1";
    }
    
    @GetMapping("/gift2")
    public String gift2() {
        return "gift2";
    }
    
    @GetMapping("/gift3")
    public String gift3() {
        return "gift3";
    }
    
    @GetMapping("/gift4")
    public String gift4() {
        return "gift4";
    }
}