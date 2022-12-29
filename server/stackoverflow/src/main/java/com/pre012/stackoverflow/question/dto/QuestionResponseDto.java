package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import lombok.Getter;
import java.time.LocalDateTime;


@Getter
public class QuestionResponseDto {
    private Long qid;
    private Long mid;

    private int questionRecommendCount;

    private String title;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private Long view;

    public QuestionResponseDto(Question question) {
        this.qid = question.getQid();
        this.mid = question.getMember().getMid();
        this.questionRecommendCount = question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size();
        this.title = question.getTitle();
        this.content = question.getContent();
        this.createdAt = question.getCreatedAt();
        this.modifiedAt = question.getModifiedAt();
        this.view = question.getView();
    }
}