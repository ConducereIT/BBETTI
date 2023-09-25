package org.lsebucuresti.server.service;

import org.lsebucuresti.server.model.Account;
import org.lsebucuresti.server.model.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    AccountRepository accountRepository;

    public Account createUser(String username, String password) {
        String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        Account user = new Account();
        user.setUserName(username);
        user.setPassword(hashedPassword);
        user.setRole("USER");
        return accountRepository.save(user);
    }

}
