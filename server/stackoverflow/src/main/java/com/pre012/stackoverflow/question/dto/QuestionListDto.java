package com.pre012.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

//member 마이페이지 최신질문리스트
@AllArgsConstructor
@Getter
public class QuestionListDto {
    private long qid;

    private String title;

    private LocalDateTime createdAt;

    private int question_recommend;

}
