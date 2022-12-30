package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.question.entity.Question;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionPostDto {

    @NotBlank
    @ApiModelProperty(example = "제목")
    private String title;

    @NotBlank
    @ApiModelProperty(example = "내용")
    private String content;

    public Question toQuestion(Member member){
        return Question.builder()
                .member(member)
                .title(title)
                .content(content)
                .createdAt(LocalDateTime.now().withNano(0))
                .modifiedAt(LocalDateTime.now().withNano(0))
                .view(0L)
                .build();
    }
}
