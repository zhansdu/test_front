import type { Component } from "vue";

export type MenuItem = {
  title:string;
  link?:string;
  sub_menu?:Array<MenuItem>;
  icon?:Component,
}