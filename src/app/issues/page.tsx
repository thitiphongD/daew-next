"use client";
import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import Link from "next/link";

const Issues = () => {
  return (
    <div>
      <Button className="bg-emerald-400 text-white cursor-pointer rounded-md px-3 py-1 hover:bg-emerald-600">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issues;
