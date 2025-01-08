package com.akstudios.todo.service;

import com.akstudios.todo.dto.JwtAuthResponse;
import com.akstudios.todo.dto.LoginDto;
import com.akstudios.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
