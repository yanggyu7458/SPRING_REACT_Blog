package com.jaeone.boardback.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jaeone.boardback.dto.request.board.PostBoardRequestDto;
import com.jaeone.boardback.dto.response.ResponseDto;
import com.jaeone.boardback.dto.response.board.PostBoardResponseDto;
import com.jaeone.boardback.entity.BoardEntity;
import com.jaeone.boardback.entity.ImageEntity;
import com.jaeone.boardback.repository.BoardRepository;
import com.jaeone.boardback.repository.ImageRepository;
import com.jaeone.boardback.repository.UserRepository;
import com.jaeone.boardback.service.BoardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService{
    
    private final UserRepository userRepository;
    private final BoardRepository boardRepository;
    private final ImageRepository imageRepository;

    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email) {
        try {
            boolean existedUserEmail = userRepository.existsByEmail(email);
            if(!existedUserEmail) return PostBoardResponseDto.notExistUser();

            //게시물저장
            BoardEntity boardEntity = new BoardEntity(dto, email);
            boardRepository.save(boardEntity);

            int boardNumber = boardEntity.getBoardNumber();
            //해당 게시물 number의 이미지들
            List<String> boardImageList = dto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();
            //생성
            for(String image: boardImageList) {
                ImageEntity imageEntity = new ImageEntity(boardNumber, image);
                imageEntities.add(imageEntity);
            }
            //저장
            imageRepository.saveAll(imageEntities);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PostBoardResponseDto.success();
    }
    
    
}
