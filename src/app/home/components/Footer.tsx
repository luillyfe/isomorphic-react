"use client";
import React, { useEffect } from "react";

import { getNextPage } from "@/app/actions";
import usePageBottom from "@/hooks/usePageBottom";

// TODO: If images are still loading, disable scroll handler
export default function Footer() {
  const isAtPageBottom = usePageBottom();

  useEffect(() => {
    if (isAtPageBottom) getNextPage();
  }, [isAtPageBottom]);

  return <div>Footer</div>;
}
