"use client";
import React from "react";

import { sendAction } from "@/app/actions";

export default function Footer() {
  const msg = "Hello, from client";
  return <div onClick={() => sendAction(msg)}>Footer</div>;
}
