import fs from "fs";
const dir = "../baeknote-mdbook/content/problems/";
const files = await fs.promises.readdir(dir, { recursive: true });
const mdFiles = files.filter((file) => file.endsWith(".md"));
console.log(mdFiles);
console.log(mdFiles.length);

for (const mdFile of mdFiles) {
  const oldPath = dir + mdFile;
  const newPath = "content/problems/" + mdFile.replace(/^0\//, "");
  console.log(newPath);

  // read file content from oldPath
  let content = await fs.promises.readFile(oldPath, "utf-8");
  const titleMatch = content.match(/BOJ (\d+) ([^\]\n]+)/);
  if (titleMatch) {
    const problemId = titleMatch[1];
    const problemTitle = titleMatch[2];
    console.log(`Found problem: ${problemId} - ${problemTitle}`);
    const body = content.split("<!-- toc -->")[1];
    const fixedBody = body
      .replace(/<details>\s*<summary>/g, '{{% details title="')
      .replace(/<\/summary>/g, '" closed="true" %}}')
      .replace(/<\/details>/g, "{{% /details %}}");
    content = `---
draft: true
params:
  boj: ${problemId}
  bojTitle: ${problemTitle}
---${fixedBody}`;
  }
  // write file content to newPath
  await fs.promises.mkdir(newPath.split("/").slice(0, -1).join("/"), {
    recursive: true,
  });
  await fs.promises.writeFile(newPath, content);
}
