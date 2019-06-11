import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';
import { nextContext } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({

    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit{

    quizes: Quiz[];
    quiz:Quiz;
    totalAnswered: number = 0;
    rightAnswer: number;
    answers: String

    QuizForm: FormGroup;

    constructor(private quizService : QuizService , private router :Router){}
    ngOnInit(): void {
        this.quiz=new Quiz();
        this.quizService.findAll().subscribe((data) => {
                this.quizes=data;
                console.log(this.quizes);
        });    
    }

    onSubmit() {
        /*  if (('input[name=c.ID]: checked').length) return;
         this.answers = ('Input[name={{c.ID}}]: checked').valueOf();
         console.log(this.QuizForm.value) */
        console.log(this.quizes)
        this.rightAnswer = 0;
        this.totalAnswered = 0;
        for (let i = 0; i < this.quizes.length; i++) {
            if ("selected" in this.quizes[i] && (this.quizes[i]["selected"] != null)) {
                this.totalAnswered++;
                if (this.quizes[i]["selected"] === this.quizes[i]["answer"]) {
                    console.log(this.quizes[i]["selected"])

                    this.rightAnswer++;
                }
            }

        }
        alert("Your Score" + " " + this.rightAnswer + " " + "TotalAnswered" + " " + this.totalAnswered)
    }





}