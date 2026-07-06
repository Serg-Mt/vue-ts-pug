import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vuePug from 'eslint-plugin-vue-pug'

export default [
  // Базовые рекомендации для JS
  ...tseslint.configs.recommended,
  
  // Конфигурация для Vue и TypeScript
  ...pluginVue.configs['flat/recommended'],
  
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
    // Подключаем поддержку Pug внутри Vue-файлов
    plugins: {
      'vue-pug': vuePug,
    },
    rules: {
      // Здесь можно переопределить или добавить свои правила
      'vue/multi-word-component-names': 'off', // пример отключения правила
    },
  },
]