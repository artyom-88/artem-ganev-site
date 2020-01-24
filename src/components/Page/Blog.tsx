import React, { ReactNode } from "react";
import IBlog from "../Model/IBlog";
import { BLANK, REL } from "../Utils/Const";
import DateUtil from "../Utils/Date";
import AbstractPage from "./AbstractPage";
import "./Blog.scss";

const DATE_COMPARATOR = (item1: IBlog, item2: IBlog): number => {
  // TODO: Migrate to normal Date format https://github.com/Artyom-Ganev/artyom-ganev-src/issues/83
  const date1 =
    DateUtil.parseDateFromString(`${item1.year}-${item1.month}-${item1.day}`) ||
    new Date();
  const date2 =
    DateUtil.parseDateFromString(`${item2.year}-${item2.month}-${item2.day}`) ||
    new Date();
  return date1 < date2 ? 1 : -1;
};

const PAGE_NAME = "blog";
const BASE_URL = `https://shielded-brushlands-46595.herokuapp.com/blog/`;

/**
 * Blog page
 */
export default class Blog extends AbstractPage<IBlog> {
  protected getContent(): ReactNode {
    return <div className="flexBox flexColumn">{this.getItems()}</div>;
  }

  protected getBaseUrl(): string {
    return BASE_URL;
  }

  protected getPageName(): string {
    return PAGE_NAME;
  }

  /**
   * Blog items markup
   */
  private getItems() {
    return this.state.items
      .sort(DATE_COMPARATOR)
      .map(({ id, year, month, day, title, link, linkCaption }: IBlog) => (
        <div key={id} className="page-blog__itemContainer">
          <div className="page-blog__title">
            {DateUtil.format(`${year}-${month}-${day}`)}
          </div>
          <div className="page-blog__item">{title}</div>
          <a href={link} target={BLANK} rel={REL}>
            {linkCaption}
          </a>
        </div>
      ));
  }
}
