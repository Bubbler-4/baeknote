---
title: 사용할 수 있는 기능
prev: docs/contributing
---

## Markdown

기본 markdown 기능을 사용할 수 있습니다.

* `## 소제목 2`, `### 소제목 3`
* `**굵게**`, `*이탤릭*`, `~~취소선~~`
* `* 불릿 리스트`, `1. 숫자 리스트`
* `[링크](주소)`, `![](이미지_주소 "캡션")`
* 그 외의 기능은 [Hextra - Markdown](https://imfing.github.io/hextra/docs/guide/markdown/)을 참고해 주세요.

## LaTeX

KaTeX 렌더러를 통해 수식을 작성할 수 있습니다. 인라인 수식은 `\(`와 `\)` 사이에 작성합니다.

\( \frac{n(n+1)}{2} \)

$ \frac{n(n+1)}{2} $

$$ \frac{n(n+1)}{2} $$

## Mermaid

[Mermaid](https://github.com/mermaid-js/mermaid#readme) 다이어그램을 그릴 수 있습니다. 코드 블록의 언어를 `mermaid`로 설정하면 자동으로 다이어그램으로 변환됩니다.

## GoAT

[GoAT](https://github.com/bep/goat) 다이어그램을 그릴 수 있습니다. 코드 블록의 언어를 `goat`로 설정하면 자동으로 다이어그램으로 변환됩니다.

```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```

## 매크로 (shortcodes)

[Hugo 기본 shortcodes](https://gohugo.io/content-management/shortcodes/)와
[Hextra의 shortcodes](https://imfing.github.io/hextra/docs/guide/shortcodes/)를 사용할 수 있습니다.

{{< icon "boj" >}} {{< icon "baeknote" >}}

{{< boj 1000 >}}

{{< baeknote 1000 >}}
