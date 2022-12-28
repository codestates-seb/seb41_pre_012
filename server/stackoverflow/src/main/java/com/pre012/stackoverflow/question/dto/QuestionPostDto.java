package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionPostDto {

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

//    private Member member;

    public Question toQuestion(){
        return Question.builder()
                .title(title)
                .content(content)
//                .member(question.getMember())
                .createdAt(LocalDateTime.now().withNano(0))
                .view(0L)
                .build();
    }
}
