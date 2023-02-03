import styError from "./Error.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className={styError.containError}>
      <title>Page Not Found</title>
      <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
      <h1 className={styError.error_text}>
        Whoops, We can't seem to find the resource you're looking for.
      </h1>
      <p className={styError.text}>
        Please check that the Web site address is spelled correctly.Or,
      </p>
      <div className={styError.btn1}>
        <Link to={"/home"}>
          <span className={styError.error}>Go to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
