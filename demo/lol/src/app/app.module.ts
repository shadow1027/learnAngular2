import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {FormsModule} from "@angular/forms";
import { MessageComponent } from './message/message.component';
import { BoxComponent } from './box/box.component';
//http第一步：引入HttpClientModule模块
import { HttpClientModule } from '@angular/common/http';
//http第五步：引入HttpClientInMemoryWebApiModule,同时注入后台data文件
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockService} from './mockServe/mock.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    MessageComponent,
    BoxComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,//HttpClientModule模块在这里使用
    HttpClientInMemoryWebApiModule.forRoot(// HttpClientInMemoryWebApiModule模块在这里使用
      MockService,
      {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
