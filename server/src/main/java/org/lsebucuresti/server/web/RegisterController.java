package org.lsebucuresti.server.web;

import org.lsebucuresti.server.model.Account;
import org.lsebucuresti.server.model.AccountRepository;
import org.lsebucuresti.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class RegisterController {

    @Autowired
    UserService userService;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        if (username == null || password == null) {
            return ResponseEntity.badRequest().body("Username and password are required.");
        }

        Account existingUser = accountRepository.findByUserName(username).orElse(null);
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Username already exists.");
        }

        userService.createUser(username, password);
        return ResponseEntity.ok("User registered successfully.");
    }

}


