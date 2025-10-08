const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

for (const probNum of process.argv.slice(2)) {
  const template = `---
params:
  boj: ${probNum}
  bojTitle: 문제 제목
---

## 문제 내용

여기에 문제 내용 입력

### 입력

### 출력

## 문제 풀이

{{< details title="스포일러" closed="true" >}}

여기에 문제 풀이 입력

{{< /details >}}
`;

  const probNumSplit = probNum.split("");
  const fileName = probNumSplit.pop() + ".md";
  const filePath = path.join("content", "problems", ...probNumSplit, fileName);

  if (!fs.existsSync(filePath)) {
    const dirName = path.dirname(filePath);
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true });
    }
    fs.writeFileSync(filePath, template);
  }

  execFileSync("code", ["-r", filePath]);
}
