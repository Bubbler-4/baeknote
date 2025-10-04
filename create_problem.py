from os import makedirs
from os.path import dirname, exists
from sys import argv

prob_num = argv[1]
template = f'''---
params:
  boj: {prob_num}
  bojTitle: 문제 제목
---

## 문제 내용

여기에 문제 내용 입력

### 입력

### 출력

## 문제 풀이

{{% details title="스포일러" closed="true" %}}

여기에 문제 풀이 입력

{{% /details %}}
'''

prob_num = prob_num.zfill(5)
path = 'content/problems/' + '/'.join(prob_num) + '.md'
if not exists(path):
    if not exists(dirname(path)):
        makedirs(dirname(path))
    with open(path, 'w') as prob_file:
        prob_file.write(template)