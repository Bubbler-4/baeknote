---
title: Baeknote에 기여하기
toc: false
prev: docs/about
next: docs/guide
---

기여하고자 하는 문서가 이미 있다면 해당 페이지 오른쪽 상단의 수정 버튼을 눌러 기여할 수 있습니다.

문서가 아직 없다면, 아래와 같은 과정을 거쳐 문서를 추가합니다.

* `/content/problems/` 폴더 내에 각 자리 숫자 하나 단위로 하위 폴더를 만들고, 그 밑에 `_index.md` 파일을 만듭니다.
  * 예를 들어, 31554번 문제에 대한 문서의 위치는 `/content/problems/3/1/5/5/4/_index.md`입니다.
  * 문제 번호가 4자리인 경우에도 똑같이 합니다. 1000번 문제에 대한 문서의 위치는 `/content/problems/1/0/0/0/_index.md`입니다.
* 그 안에 다음의 내용을 복사한 후 내용을 작성합니다.

```
---
params:
  boj: 12345
  bojTitle: 문제 제목
---

## 문제 내용

여기에 문제 내용 입력

### 입력

### 출력

## 문제 풀이

{{%/* details title="스포일러" closed="true" */%}}

여기에 문제 풀이 입력

{{%/* /details */%}}
```

## 유의점

* 공식 풀이 또는 블로그 글을 링크할 경우, archive.org 또는 archive.md 등을 이용해 아카이브된 링크를 같이 넣어 주세요.
* BOJ에 그대로 제출하여 AC를 받을 수 있는 코드는 넣지 말아 주세요. 대신 pseudocode나 Mermaid flow chart 등을 이용할 수 있습니다.
