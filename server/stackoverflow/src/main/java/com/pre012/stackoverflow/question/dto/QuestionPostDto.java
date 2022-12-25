package com.pre012.stackoverflow.question.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionPostDto {

    private String title;

    private String content;

//    private Member member;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    private Long view;

    public Question toQuestion(){
        return Question.builder()
                .title(title)
                .content(content)
//                .member(question.getMember())
                .createdAt(LocalDateTime.now())
                .view(0L)
                .build();
    }
}
