import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import CodeSnippet from "@/components/code-snippet";
import fs from "fs";
import path from "path";
const gitc = fs.readFileSync(
  path.join(process.cwd(), "lib", "gitc.sh"),
  "utf8"
);

export default function Page() {
  return (
    <main className="container mx-auto p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Git command automation</CardTitle>
          <CardDescription>
            A small Linux-only helper script to quickly add, commit and push
            changes in the current Git repository. Drop it under{" "}
            <code>~/bin</code> and make it executable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="prose">
            <p>
              This short guide shows a tiny bash helper (named <code>gitc</code>
              ) that automates the common flow: stage files, commit with a
              message and push. It supports a couple of flags like{" "}
              <code>--no-add</code> and
              <code>--amend</code> and is written for Linux shells.
            </p>

            <h3>Steps</h3>
            <ol>
              <li>
                Save the script to <code>~/bin/gitc</code> (create the directory
                if it doesn't exist).
              </li>
              <li>
                Make it executable: <code>chmod +x ~/bin/gitc</code>.
              </li>
              <li>
                Ensure <code>~/bin</code> is in your <code>PATH</code> (add to{" "}
                <code>~/.profile</code> or your shell rc).
              </li>
              <li>
                Run <code>gitc "Your message"</code> or simply <code>gitc</code>{" "}
                to be prompted for a message.
              </li>
            </ol>

            <h3>Notes (Linux only)</h3>
            <ul>
              <li>This script assumes a POSIX-ish shell (bash/sh).</li>
              <li>It will fail if you run it outside a Git work tree.</li>
              <li>
                It runs <code>git push</code> after committing — remove that if
                you prefer manual pushes.
              </li>
            </ul>
          </section>

          <div>
            <CodeSnippet
              title="gitc - quick git helper"
              code={gitc}
              language="bash"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
