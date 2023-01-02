package com.pre012.stackoverflow.member;


import com.pre012.stackoverflow.answer.Answer;
import com.pre012.stackoverflow.answer.AnswerListDto;
import com.pre012.stackoverflow.question.dto.QuestionListDto;
import com.pre012.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    MemberResponseDto memberToMemberResponseDto(Member member);


    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    default MemberDetailResponseDto memberToMemberDetailResponseDto(Member member){
        List<Question> questions = member.getQuestions();
        Collections.reverse(questions);
        List<QuestionListDto> questionList = questions.stream().limit(5).map(question ->
                new QuestionListDto(question.getQid(),question.getTitle(),question.getCreatedAt(),question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())).collect(Collectors.toList());

        List<Answer> answers = member.getAnswers();
        Collections.reverse(answers);
        List<AnswerListDto> answerList = answers.stream().limit(5).map(answer ->
                new AnswerListDto(answer.getQuestion().getQid(),answer.getQuestion().getTitle(),answer.getQuestion().getCreatedAt(),answer.getAnswerRecommend() == null ? 0: answer.getAnswerRecommend().size())).collect(Collectors.toList());
        return new MemberDetailResponseDto(member.getMid(),member.getUsername(),member.getImg(),member.getQuestions() == null ? 0 : member.getQuestions().size(),
                member.getAnswers() == null ? 0 : member.getAnswers().size(),questionList,answerList);

    }
}
