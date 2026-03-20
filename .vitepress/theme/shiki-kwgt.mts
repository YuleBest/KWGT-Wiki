import type { LanguageRegistration } from 'shiki'

export const kwgtLang: LanguageRegistration = {
  name: 'kwgt',
  scopeName: 'source.kwgt',
  displayName: 'KWGT',
  repository: {
    expression: {
      patterns: [
        { include: '#strings' },
        { include: '#nested_parens' },
        { include: '#all_functions' }, // 核心函数名匹配
        { include: '#special_chars' }, // 逗号和冒号
        { include: '#constants' }, // 数字
      ],
    },
    nested_parens: {
      patterns: [
        {
          begin: /\(/,
          beginCaptures: { 0: { name: 'constant.character.escape.kwgt' } },
          end: /\)/,
          endCaptures: { 0: { name: 'constant.character.escape.kwgt' } },
          patterns: [{ include: '#expression' }],
        },
      ],
    },
    all_functions: {
      patterns: [
        {
          name: 'keyword.control.kwgt',
          match:
            /\b(ai|aq|bi|bp|br|cd|ce|ci|cm|df|dp|fd|fl|gv|if|li|lv|mi|mq|mu|nc|ni|rm|sh|si|tc|tf|ts|tu|uc|wf|wg|wi)\b/,
        },
      ],
    },
    special_chars: {
      patterns: [{ name: 'constant.character.escape.kwgt', match: /[,:]/ }],
    },
    strings: {
      patterns: [
        { name: 'string.quoted.double.kwgt', begin: /"/, end: /"/ },
        { name: 'string.quoted.single.kwgt', begin: /'/, end: /'/ },
      ],
    },
    constants: {
      patterns: [{ name: 'constant.numeric.kwgt', match: /\b\d+(\.\d+)?\b/ }],
    },
  },
  patterns: [{ name: 'entity.name.tag.kwgt', match: /\$/ }, { include: '#expression' }],
}
