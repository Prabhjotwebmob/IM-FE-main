

import { ViewContainerRef, AfterViewInit, ViewChild, Component, ComponentFactoryResolver } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('SidebarComponent', { read: ViewContainerRef }) SidebarComponent;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  ngAfterViewInit(): void {
    loadRemoteModule({
      remoteEntry: "http://localhost:4001/remoteEntry.js",
      remoteName: "sidebar",
      exposedModule: "SidebarComponent"
    })
      .then(module => {
        let factory = this.componentFactoryResolver.resolveComponentFactory(module.SidebarComponent)
        this.SidebarComponent.createComponent(factory);
      });
  }
}
