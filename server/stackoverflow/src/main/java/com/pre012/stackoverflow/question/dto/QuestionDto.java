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
    private String title;
    private String content;
//    private Member username;
    private Long questionVotes;
    private Long answers;
    private Long view;

    public static QuestionDto result(Question question) {

        return QuestionDto.builder()
                .qid(question.getQid())
                .title(question.getTitle())
                .content(question.getContent())
//                .username(question.getUsername())
                .questionVotes((long) question.getQuestionVote().size())
//                .answers(question.getAnswers())
                .view(question.getView()).build();
    }
}
