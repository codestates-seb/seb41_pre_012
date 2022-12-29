package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDto {
    private Long qid;

    private String title;

    private String content;

    private Member member;

    private Long questionRecommends;

    private Long answers;

    private Long view;

    private LocalDateTime createdAt;

    public static QuestionDto result(Question question) {

        return QuestionDto.builder()
                .qid(question.getQid())
                .title(question.getTitle())
                .content(question.getContent())
                .member(question.getMember())
                .questionRecommends((long) question.getQuestionRecommend().size())
//                .answers(question.getAnswers())
                .view(question.getView())
                .createdAt(question.getCreatedAt()).build();
    }
}
