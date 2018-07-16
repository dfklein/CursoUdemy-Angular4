// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/reflect';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
// scripts importados para fazer a localização da aplicação (polyfills.js).
// O Intl é uma dependência instalada no package.json (linha 27)
// Além disso ele é declarado no app.module.ts (import { NgModule, LOCALE_ID } from '@angular/core'; + declarar providers: {provide: LOCALE_ID, useValue: 'pt-BR'})
import 'intl'
import 'intl/locale-data/jsonp/pt-BR.js'
