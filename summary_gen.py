import os

header = '''# Summary

# Baeknote

- [Baeknote에 관하여](./README.md)
- [Baeknote에 기여하기](./CONTRIBUTING.md)

# 문제 목록

'''

prob_tree = {}

base_dir = 'content/problems/'
for dirpath, dirnames, filenames in os.walk(base_dir):
    if dirpath == base_dir: continue
    inner_path = dirpath.removeprefix(base_dir).split('/')
    cur_item = inner_path.pop()
    parent_node = prob_tree
    for inner in inner_path:
        parent_node = parent_node[inner]
    cur_node = {}
    parent_node[cur_item] = cur_node
    for md in filenames:
        cur_node[md] = None

def output_tree(node, cur_path, indent, output_handle):
    for child in sorted(node):
        if child.endswith('.md'):
            probno = (''.join(cur_path) + child.removesuffix('.md')).lstrip('0')
            probpath = './problems/' + '/'.join(cur_path) + '/' + child
            output_handle.write(f'{indent}- [{probno}]({probpath})\n')
        else:
            output_handle.write(f'{indent}- [{child}]()\n')
            output_tree(node[child], cur_path + [child], indent + '  ', output_handle)

with open('content/SUMMARY.md', 'w') as summary:
    summary.write(header)
    output_tree(prob_tree, [], '', summary)
