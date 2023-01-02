package com.pre012.stackoverflow.question.dto;

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

    private String img;

    private String userInfo;

    private String title;

    private String content;

    private int question_recommend;

    private int answer_list;

    private Long view;
    private LocalDateTime createdAt;

    public static QuestionDto result(Question question) {

        return QuestionDto.builder()
                .qid(question.getQid())
                .img(question.getMember().getImg())
                .userInfo(question.getMember().getUsername())
                .title(question.getTitle())
                .content(question.getContent())
                .question_recommend(question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())
                .answer_list(question.getAnswerList() == null ? 0 : question.getAnswerList().size())
                .view(question.getView())
                .createdAt(question.getCreatedAt())
                .build();
    }
}
