
package com.pre012.stackoverflow.answer;

import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto {

     @NotBlank
    private String content;



}
