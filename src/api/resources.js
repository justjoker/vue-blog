"use strict";
import Vue from 'vue'
import  VueResource from 'vue-resource'
var apiVersion = require('../../config').apiVersion;
Vue.use(VueResource);

Vue.http.options.root = 'https://127.0.0.1:4000';
Vue.http.options.crossOrigin = true;
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.http.interceptors.push({

  request: function (request) {
    return request;
  },

  response: function (response) {
    return response;
  }

});
export const ArticleResource = Vue.resource("api/" + apiVersion + "/blog/detail/");
export const BlogListResource = Vue.resource('api/' + apiVersion + '/blog/list/');
export const ReplyResource = Vue.resource('api/' + apiVersion + '/blog/reply/{type}');
export const ToolsResource = Vue.resource('api/' + apiVersion + '/tools/{type}');
export const AuthResource = Vue.resource('api/' + apiVersion + '/auth/{type}');
export const AdminResource = Vue.resource('api/' + apiVersion + '/admin/{type}');
