package org.lsebucuresti.server.service;

import org.lsebucuresti.server.model.Account;
import org.lsebucuresti.server.model.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

    @Autowired private AccountRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Account> user = userRepository.findByUserName(userName);

        User.UserBuilder builder = null;

        if (user.isPresent()){
            Account currentUser = user.get();

            builder = org.springframework.security.core.userdetails.User.withUsername(userName);
            builder.password(currentUser.getPassword());
            builder.roles(currentUser.getRole());
        }else{
            throw new UsernameNotFoundException("User not found");
        }

        return builder.build();
    }

}
