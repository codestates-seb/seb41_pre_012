package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.answer.AnswerResponseDto;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDto {
    private Long qid;

    private Long mid;

    private String userInfo;

    private String title;

    private String content;

    private int question_recommend;

    private int answer_list;

    private Long view;

    public static QuestionDto result(Question question) {
        List<AnswerResponseDto> answerResponseDtos = question.getAnswerList().stream().map(answer
                -> new AnswerResponseDto(answer.getAid(), answer.getMember().getUsername(), answer.getContent(),
                answer.getCreatedAt(), answer.getModifiedAt(), answer.isSelected(),
                answer.getAnswerRecommend() == null ? 0 : answer.getAnswerRecommend().size())).collect(Collectors.toList());

        return QuestionDto.builder()
                .qid(question.getQid())
                .mid(question.getMember().getMid())
                .userInfo(question.getMember().getUsername())
                .title(question.getTitle())
                .content(question.getContent())
                .question_recommend(question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())
                .answer_list(question.getAnswerList() == null ? 0 : question.getAnswerList().size())
                .view(question.getView())
                .build();
    }
}
