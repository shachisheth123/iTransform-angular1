import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';



@Component({
    templateUrl: "chapters.component.html"
})
export class ChaptersComponent implements OnInit {

    progress=0;

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) { }

    course: Courses;
    chapters: CourseChapter[]
    modules: ChapterModule[];
    ngOnInit(): void {

        this.route.paramMap.subscribe((map) => {
            let courseId = Number(map.get("courseId"));

            this.courseService.getCourseById().subscribe((data) => {
                this.course = data;
                this.chapters = this.course.courseChapter;

                let count = 1;
                for (let i = 0; i < this.chapters.length; i++) {
                    this.modules = this.chapters[0].chapterModule;
                    for (let j = 0; j < this.modules.length; j++) {
                        count++;
                    }
                }
                console.log(this.course)
                console.log(this.chapters.length)
                console.log(count);
            })
        })



    }

count=1;
    onClick(){
        this.progress = this.count++/5*100;
    }
}