declare module "angular2/src/router/browser_location" {
  class BrowserLocation {
    path(): string
  }
}

declare module "angular2/src/router/location" {
  class Location {
    normalize(url: string): string
  }
}

declare module "angular2/router" {
  class Instruction { }
  class Router {
    navigate(url: string): Promise<any>;
    config(config: any): Promise<any>;
    deactivate(): Promise<any>;
    activate(instruction: Instruction): Promise<any>;
    recognize(url: string): Instruction;
    recognize(url: string): Instruction;
    renavigate(): Promise<any>;
    generate(name: string, params: any): string;
    subscribe(onNext: Function): void;
  }
  var RouterOutlet: any;
  var RouterLink: any;
  var RouteParams: any;
  var routerInjectables: any;
  var RouteConfigAnnotation: any;
  var RouteConfig: any;
}
