import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent_services/agent.service';

@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',
  styleUrls: ['./dashboard-agent.component.css']
})
export class DashboardAgentComponent implements OnInit{
  agent_details: any;

  constructor(private agent:AgentService){}

  ngOnInit(): void {
    this.agent.getAgentData().subscribe((details) => {
      this.agent_details = details.data;
    })
  }
}
