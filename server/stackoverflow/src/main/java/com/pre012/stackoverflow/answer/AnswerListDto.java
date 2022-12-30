package com.pre012.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class AnswerListDto {
    private long qid;

    private String title;

    private LocalDateTime createdAt;

    private int answer_recommend;

}
