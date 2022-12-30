package com.pre012.stackoverflow.answer;

import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;


    @JoinColumn(name="mid")
    @ManyToOne
    private Member member;

   @JoinColumn(name = "qid")
    @ManyToOne
    private Question question;


    @Column
    private String content;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now().withNano(0);

    @Column
    private LocalDateTime modifiedAt= LocalDateTime.now().withNano(0);

    @Column
    private boolean isSelected;


    @OneToMany(mappedBy = "answer")
    private List<AnswerRecommend> answerRecommend;



}
