<template>
  <div class="shortcut-converter">
    <div class="input-section">
      <input 
        v-model="userShortcut" 
        :placeholder="t('placeholder')"
        style="width: 300px; padding: 8px; margin-right: 10px"
      >
      <button @click="generateCode" style="padding: 8px 16px">
        {{ t('convertButton') }}
      </button>
    </div>
    
    <div v-if="ahkCode" class="code-output" style="margin-top: 15px">
      <div class="language-ahk vp-code-dark vp-code-light">
        <span class="lang">ahk</span>
        <pre><code>{{ ahkCode }}</code></pre>
      </div>
      <div class="button-group" style="margin-top: 10px; display: flex; gap: 10px">
        <button 
          @click="downloadAhkFile" 
          style="padding: 8px 16px"
        >
          {{ t('downloadButton') }}
        </button>
        <button 
          @click="copyCode" 
          style="padding: 8px 16px; background-color: #f0f0f0; color: #333"
        >
          {{ t('copyButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'zh',
      validator: value => ['zh', 'en'].includes(value)
    }
  },
  data() {
    return {
      userShortcut: '',
      ahkCode: ''
    }
  },
  computed: {
    t() {
      return key => this.translations[this.lang][key]
    },
    translations() {
      return {
        zh: {
          placeholder: '填写快捷键，如 Ctrl+Shift+;',
          convertButton: '转换',
          setDelay: '设置按键延迟为 0，以便更快地发送按键',
          whenPress: '当按下该快捷键时',
          downloadButton: '一键下载生成脚本',
          copyButton: '一键复制脚本内容',
          copySuccess: '脚本已复制到剪贴板'
        },
        en: {
          placeholder: 'Enter shortcut, e.g. Ctrl+Shift+;',
          convertButton: 'Convert',
          setDelay: 'Set key delay to 0 for faster sending',
          whenPress: 'When the shortcut is pressed',
          downloadButton: 'Download generation script',
          copyButton: 'Copy script to clipboard',
          copySuccess: 'Script copied to clipboard'
        }
      }
    }
  },
  methods: {
    generateCode() {
      const converted = this.userShortcut
        .replace(/\s*\+\s*/g, '')
        .replace(/Ctrl/gi, '^')
        .replace(/Shift/gi, '+')
        .replace(/Alt/gi, '!')
        .replace(/Win|Command|Cmd/gi, '#')

      this.ahkCode = `#Requires AutoHotkey v2.0

; ${this.t('setDelay')}
SetKeyDelay 0

; ${this.t('whenPress')}
#v::Send "${converted}"`
    },
    downloadAhkFile() {
      const blob = new Blob([this.ahkCode], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ReplaceWinV.ahk';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    copyCode() {
      navigator.clipboard.writeText(this.ahkCode)
        .then(() => {
          alert(this.t('copySuccess'));
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  },
  mounted() {
    this.userShortcut = 'Ctrl+Shift+;'
  }
}
</script>

<style scoped>
.shortcut-converter {
  text-align: left;
  margin-bottom: 20px;
}

.input-section {
  display: flex;
  align-items: center;
}

input {
  padding: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.9rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

.button-group {
  display: flex;
  gap: 10px;
}
</style>