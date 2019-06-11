import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';


@Component({
    templateUrl:"module.component.html"
})
export class ModuleComponent implements OnInit {

    constructor(private courseService: CourseService,
        private route: ActivatedRoute,
        private router:Router) { }

        course:Courses;
        chapters:CourseChapter[]
        modules:ChapterModule[];
        module:ChapterModule;
        count=1;
        courseId:number;
        chapterId:number;
        moduleId:number;

        array: Array<String> = [];
        value:string;
        length=0;

     ngOnInit(): void {
  
    this.route.paramMap.subscribe((map) =>{
   this.chapterId = Number(map.get("chapterId"));
   this.moduleId = Number(map.get("moduleId"));

   console.log(this.chapterId+""+this.moduleId)
   this.courseService.getCourseById().subscribe((data) =>{
       this.course = data;
       this.courseId = this.course.courseId;
        this.chapters = this.course.courseChapter;
        
        let count = 1;  
        
        for(let i =0;i<this.chapters.length;i++){
           this.modules = this.chapters[i].chapterModule;
           for(let j = 0;j<this.modules.length;j++){
                count++;
                this.value = i + "" + j; 

                if(this.length == 0){
                    this.array.push(i + "" + j);
                }

           }
        }
        this.length = this.array.length;
        console.log(this.array)
        console.log(this.course)
        this.module = this.chapters[this.chapterId].chapterModule[this.moduleId];
        console.log(this.module)

   })
})

    }

    next(){
        let value = this.chapterId +"" + this.moduleId; 
        for(let i=0;i< this.array.length;i++){
            if(value == this.array[i] && i!=this.array.length-1){
                let got = this.array[i+1];
                console.log(got)
                this.router.navigate(["chapters/"+ this.courseId+"/modules/" + Number(got.charAt(0)) +"/" + Number(got.charAt(1))]);
            }    
        }
    }

    previous(){
        let value = this.chapterId +"" + this.moduleId; 
        for(let i=this.array.length-1;i>=0 ;i--){
            if(value == this.array[i] && i!=0){
                let got = this.array[i-1];
                console.log(got)
                this.router.navigate(["chapters/"+ this.courseId+"/modules/" + Number(got.charAt(0)) +"/" + Number(got.charAt(1))]);
            }    
        }
    }

}