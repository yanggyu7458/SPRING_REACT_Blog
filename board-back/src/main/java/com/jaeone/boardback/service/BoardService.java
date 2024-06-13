package com.jaeone.boardback.service;

import org.springframework.http.ResponseEntity;

import com.jaeone.boardback.dto.request.board.PostBoardRequestDto;
import com.jaeone.boardback.dto.response.board.PostBoardResponseDto;

public interface BoardService {
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
