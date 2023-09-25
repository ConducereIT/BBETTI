package org.lsebucuresti.server.security;

import org.lsebucuresti.server.service.UserDetailsServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebAuthorizationConfig {

    @Autowired
    private UserDetailsServiceImp userDetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    SecurityFilterChain filterChain (HttpSecurity httpSecurity) throws Exception{
        httpSecurity.authorizeRequests(
                authorizeRequest ->
                        authorizeRequest
                        .requestMatchers(new AntPathRequestMatcher("/login", "POST")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/api/register", "POST")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/", "GET")).authenticated()
                                .anyRequest().authenticated()

        );
        httpSecurity.csrf().disable().cors();
        httpSecurity.httpBasic().and().formLogin().and().logout().logoutSuccessUrl("/login");

        return httpSecurity.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Autowired
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }

}
