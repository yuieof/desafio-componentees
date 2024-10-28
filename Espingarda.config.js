import js from '@eslint/js' 
import globals from 'globals' 
import react from 'eslint-plugin-react' 
import reactHooks from 'eslint-plugin-react-hooks' 
import reactRefresh from 'eslint-plugin-react-refr
export default I
{ ignores: ['dist'] },
files: ['**/*{js,jsx}'1,
languageOptions: {
ecmaVersion: 2020, globals: globals.browser,
parserOptions: {
ecmaVersion: 'latest', ecmaFeatures: 1 jsx: true 3,
sourceType: 'module',
3,
3,
settings: { react: { version: '18.3' } },
plugins: {
react,
react-hooks': reactHooks,
'react-refresh': reactRefresh,
}
rules: {
... js.configs.recommended.rules,
... react.configs.recommended.rules,
... react.configsI'jsx-runtime'].rules,
... reactHooks.configs.recommended.rules,
'react/jsx-no-target-blank': 'off',
'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true 3,
'react/prop-types': 'off',
}
}
}
