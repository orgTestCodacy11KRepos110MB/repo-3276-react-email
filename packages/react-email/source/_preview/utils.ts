export const utils = [
  {
    title: 'as.ts',
    content:
      'export type As<\n  DefaultTag extends React.ElementType,\n  T1 extends React.ElementType,\n  T2 extends React.ElementType = T1,\n  T3 extends React.ElementType = T1,\n  T4 extends React.ElementType = T1,\n  T5 extends React.ElementType = T1,\n> =\n  | (React.ComponentPropsWithRef<DefaultTag> & {\n      as?: DefaultTag;\n    })\n  | (React.ComponentPropsWithRef<T1> & {\n      as: T1;\n    })\n  | (React.ComponentPropsWithRef<T2> & {\n      as: T2;\n    })\n  | (React.ComponentPropsWithRef<T3> & {\n      as: T3;\n    })\n  | (React.ComponentPropsWithRef<T4> & {\n      as: T4;\n    })\n  | (React.ComponentPropsWithRef<T5> & {\n      as: T5;\n    });\n',
  },
  {
    title: 'copy-text-to-clipboard.ts',
    content:
      "export const copyTextToClipboard = async (text: string) => {\n  try {\n    await navigator.clipboard.writeText(text);\n  } catch {\n    throw new Error('Not able to copy');\n  }\n};\n",
  },
  {
    title: 'index.ts',
    content:
      "export * from './as';\nexport * from './unreachable';\nexport * from './copy-text-to-clipboard';\n",
  },
  {
    title: 'language-map.ts',
    content:
      "const languageMap = {\n  jsx: 'React',\n  markup: 'HTML',\n  markdown: 'Plain Text',\n};\n\nexport default languageMap;\n",
  },
  {
    title: 'unreachable.ts',
    content:
      "export const unreachable = (\n  condition: never,\n  message = `Entered unreachable code. Received '${condition}'.`,\n): never => {\n  throw new TypeError(message);\n};\n",
  },
];
