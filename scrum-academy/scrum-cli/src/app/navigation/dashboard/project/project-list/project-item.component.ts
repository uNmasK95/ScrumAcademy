import { Component, Input } from '@angular/core';

import { Project } from '../project';


@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Input() projectId: number;
}
