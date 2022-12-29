package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.member.Member;
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

    private Member member;

    private int questionRecommendsCount;

//    private int answerCount;

    private Long view;

    public static QuestionDto result(Question question) {

        return QuestionDto.builder()
                .qid(question.getQid())
                .mid(question.getMember().getMid())
                .username(question.getMember().getUsername())
                .title(question.getTitle())
                .content(question.getContent())
                .member(question.getMember())
                .questionRecommendsCount(question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())
//                .answerCount(question.getAnswers())
                .view(question.getView())
                .build();
    }
}
