import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const TodoListApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("@loopback/boot/dist8/src/interfaces").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/context/dist8/src/value-promise").Constructor<import("@loopback/boot/dist8/src/interfaces").Booter>[]): import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/context/dist8/src/binding").Binding<any>[];
    component(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    serviceProvider<S>(provider: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/service-proxy/dist8/src/mixins/service.mixin").Class<import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/context/dist8/src/provider").Provider<S>>): void;
    component(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/service-proxy/dist8/src/mixins/service.mixin").Class<{}>): void;
    mountComponentServices(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/service-proxy/dist8/src/mixins/service.mixin").Class<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    repository(repo: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/common-types").Class<import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/repositories/repository").Repository<any>>): void;
    getRepository<R extends import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/repositories/repository").Repository<any>>(repo: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/common-types").Class<R>): Promise<R>;
    dataSource(dataSource: import("_@loopback_repository@0.19.0@@loopback/repository/node_modules/loopback-datasource-juggler/types/datasource").DataSource | import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/common-types").Class<import("_@loopback_repository@0.19.0@@loopback/repository/node_modules/loopback-datasource-juggler/types/datasource").DataSource>, name?: string | undefined): void;
    component(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/common-types").Class<{}>): void;
    mountComponentRepositories(component: import("_@loopback_boot@0.14.3@@loopback/boot/node_modules/@loopback/repository/dist8/src/common-types").Class<{}>): void;
}) & typeof RestApplication;
export declare class TodoListApplication extends TodoListApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
