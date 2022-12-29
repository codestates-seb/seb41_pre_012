package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.entity.QuestionRecommend;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDetailDto {
    private Long qid;

    private Long mid;

    private String title;

    private String content;

    private String username;

    private List<QuestionRecommend> questionRecommends;

    private Long view;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

//    private List<Answer> answer;

    public static QuestionDetailDto result(Question question) {

        return QuestionDetailDto.builder()
                .qid(question.getQid())
                .mid(question.getMember().getMid())
                .title(question.getTitle())
                .content(question.getContent())
                .username(question.getMember().getUsername())
                .questionRecommends(question.getQuestionRecommend())
                .view(question.getView())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
//                .answer(question.getAnswer())
                .build();
    }
}
