import { Component } from '@angular/core';
import { AgentService } from 'src/app/services/agent_services/agent.service';

@Component({
  selector: 'app-commit-content',
  templateUrl: './commit-content.component.html',
  styleUrls: ['./commit-content.component.css']
})
export class CommitContentComponent {
  schemes_details: any;
  commit_details: any;
  constructor(private schemes:AgentService){}

  onDeleteCommit(commit:any) {
    this.schemes.deleteCommitDetails(commit).subscribe((details) => {
      console.log(details.data);
      // console.log("Deleted Product Details");
    })
    alert("SuccessFully Deleted commit Deleted...");
  }

  ngOnInit(): void {
    this.schemes.getCommitData().subscribe((details) => {
      this.commit_details = details.data;
      // console.log("Schemes Details");      
    })
  }
}
