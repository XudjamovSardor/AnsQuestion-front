import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/model/subject';
import { SubjectLvl } from 'src/app/model/subjectLvl';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss', "../../../assets/spriler.style.scss"]
})
export class SubjectComponent implements OnInit, AfterContentInit {
  subjects!: Subject[]
  subjectSon: number = 0
  isLodingResult: boolean = false
  tahrirReja: boolean = false
  subjectForm!: FormGroup
  disableSelect: FormControl = new FormControl(false);
  isLoading: boolean = false


  constructor(
    private subjectService: SubjectService,
    private fb: FormBuilder
  ) { }

  ngAfterContentInit(): void {
    this.loader('')
  }

  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      subjectLevl: [SubjectLvl, [Validators.required]],
      info: ['']
    });
  }

  loader(key: any) {

    this.isLodingResult = true

    let params = {
      key: key
    }
    this.subjectService.getAll(params).subscribe(data => {
      this.subjects = data
      this.isLodingResult = false
      this.subjectSon = data.length == 0 ? 0 : data.length
    }, error => {
      this.isLodingResult = false;
      throw new Error("(FUNC `loader()`)")
    })
  }

  deletById(id: number) {
    this.subjectService.delete(id).subscribe(data => {
      this.loader('')
    }, error => {
      throw new Error("I don't find this ID \n(FUNC `deleteById()`");
    })
  }

  save() {
    this.isLodingResult = true
    this.isLoading = true
    const info: Subject = this.subjectForm.getRawValue()
    console.log(info);
    
    if (!this.tahrirReja) {
      this.subjectService.create(info).subscribe(data => {
        this.loader('')
        this.isLodingResult = false
        this.tozalash()
      },
        error => {
          throw new Error("Uxshamadi .... (FUNC --save()--)");
        })
    } else {
      this.subjectService.update(info).subscribe(data => {
        this.tahrirReja = false
        this.isLodingResult = false
        this.loader('')
        this.tozalash()
      })
    }
  }

  tahrir(sub: Subject) {
    this.tahrirReja = true
    this.subjectForm.reset(sub)
  }

  tozalash() {
    this.subjectForm.reset()
    this.tahrirReja = false
    this.isLoading = false
  }

  refresh() {
    this.loader('')
  }
  displayedColumns: string[] = ["id", "name", "subjectLevl", "info", "tasks"]; // For Table
}
