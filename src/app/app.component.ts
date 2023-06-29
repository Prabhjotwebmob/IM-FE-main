
import { ViewContainerRef, AfterViewInit, ViewChild, Component, ComponentFactoryResolver } from '@angular/core';
import { loadRemoteModule } from './utils/federation-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('SidebarComponent', {read: ViewContainerRef}) SidebarComponent;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    ) {
  }
  ngAfterViewInit(): void {
    loadRemoteModule({
      remoteEntry: "http://localhost:3005/remoteEntry.js",
      remoteName: "sidebar",
      exposedModule: "SidebarComponent"
    })
      .then(module => {
        let factory = this.componentFactoryResolver.resolveComponentFactory(module.SidebarComponent)
        this.SidebarComponent.createComponent(factory);
      });
  }
}
