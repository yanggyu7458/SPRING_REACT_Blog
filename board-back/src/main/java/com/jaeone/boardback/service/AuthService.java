package com.jaeone.boardback.service;

import org.springframework.http.ResponseEntity;

import com.jaeone.boardback.dto.request.auth.SignInRequestDto;
import com.jaeone.boardback.dto.response.auth.SignInResponseDto;
import com.jaeone.boardback.dto.request.auth.SignUpRequestDto;
import com.jaeone.boardback.dto.response.auth.SignUpResponseDto;

public interface AuthService {
     
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
}
