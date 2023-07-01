"use client";
import React from "react";

import { getNextPage } from "@/app/actions";

export default function Footer() {
  return <div onClick={() => getNextPage()}>Footer</div>;
}
