"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";

interface CodeSnippetProps {
  title?: string;
  code: string;
  language?: string;
}

export function CodeSnippet({
  title,
  code,
  language = "bash",
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          {title ?? "Snippet"}
        </CardTitle>
        <Button
          size="sm"
          variant="outline"
          onClick={handleCopy}
          className="ml-2"
        >
          <Copy className="mr-2 h-4 w-4" /> {copied ? "Copied" : "Copy"}
        </Button>
      </CardHeader>
      <CardContent>
        <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
          <code data-lang={language} className="whitespace-pre">
            {code}
          </code>
        </pre>
      </CardContent>
    </Card>
  );
}

export default CodeSnippet;
