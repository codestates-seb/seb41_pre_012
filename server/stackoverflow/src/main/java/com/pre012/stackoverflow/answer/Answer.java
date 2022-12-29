package com.pre012.stackoverflow.answer;

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


    /* @JoinColumn(name="mid)
    @ManyToOne
    private Member member;

    @JoinColumn(name = "qid")
    @ManyToOne
    private Question question;
     */

    @Column
    private String content;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "modified_at", updatable = true)
    private LocalDateTime modifiedAt;

    @Column
    private boolean isSelected;


    @OneToMany(mappedBy = "answer")
    private List<AnswerVote> answerVote;


}
