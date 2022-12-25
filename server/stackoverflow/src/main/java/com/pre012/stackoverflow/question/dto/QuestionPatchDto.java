package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class QuestionPatchDto {

    private Long qId;

    private String title;

    private String content;

    private LocalDateTime modifiedAt;

    public Question toQuestion(QuestionPatchDto dto){
        return Question.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .modifiedAt(LocalDateTime.now())
                .build();
    }

}
