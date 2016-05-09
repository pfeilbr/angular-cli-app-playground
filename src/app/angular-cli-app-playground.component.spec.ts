import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularCliAppPlaygroundAppComponent } from '../app/angular-cli-app-playground.component';

beforeEachProviders(() => [AngularCliAppPlaygroundAppComponent]);

describe('App: AngularCliAppPlayground', () => {
  it('should create the app',
      inject([AngularCliAppPlaygroundAppComponent], (app: AngularCliAppPlaygroundAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-cli-app-playground works!\'',
      inject([AngularCliAppPlaygroundAppComponent], (app: AngularCliAppPlaygroundAppComponent) => {
    expect(app.title).toEqual('angular-cli-app-playground works!');
  }));
});
