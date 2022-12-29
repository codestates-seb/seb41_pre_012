package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDto {
    private Long qid;

    private Long mid;

    private String username;

    private String title;

    private String content;

    private int questionRecommendsCount;

    private Long view;

    public static QuestionDto result(Question question) {

        return QuestionDto.builder()
                .qid(question.getQid())
                .mid(question.getMember().getMid())
                .username(question.getMember().getUsername())
                .title(question.getTitle())
                .content(question.getContent())
                .questionRecommendsCount(question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())
                .view(question.getView())
                .build();
    }
}
