package com.prodental.common.config;

import com.prodental.common.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests(auth -> {
                    auth
.requestMatchers("/api/v1/auth/**").permitAll()
                            .requestMatchers("/api/v1/admin/**").hasAnyAuthority("ADMIN")
                            .requestMatchers("/api/v1/admin/**").hasAnyRole( "ADMIN")
                            .requestMatchers("/api/v1/user/**").hasAnyAuthority("USER")
                            .requestMatchers("/api/v1/user/**").hasAnyRole( "USER")
                            .anyRequest()
                            .permitAll();
                })
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)

                .cors(Customizer.withDefaults())
                .headers(AbstractHttpConfigurer::disable)
                .httpBasic(Customizer.withDefaults());


                return http.build();
    }

}
