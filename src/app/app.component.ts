import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';
import { Student } from 'src/interfaces/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-web';
  carrils: Student[][] = [[], [], []];

  constructor(private firestoreClient: CrudService) { }

  ngOnInit() {
    this.firestoreClient.checkCarrils().subscribe(data => {
      const tempCarril: Student[][] = [[], [], []];
      data.map((firestoreEvent) => {
        const payload = firestoreEvent.payload.doc.data() as Student;
        const payNumber = parseInt(payload.number);
        tempCarril[payNumber - 1].push(payload);
      })
      this.carrils = tempCarril;
    });
  }

}
