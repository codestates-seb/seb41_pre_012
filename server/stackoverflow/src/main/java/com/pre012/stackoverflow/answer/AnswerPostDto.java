
package com.pre012.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto{

    private long aid;

    @NotBlank
    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt;

    private boolean isSelected;
}
