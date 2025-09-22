<template>
  <span class="custom-platform-badge" :style="badgeStyle">
    <component :is="iconComponent" v-if="iconComponent" :color="iconColor" :style="{ display: 'inline-block', verticalAlign: 'middle' }" />
    <span v-if="displayText" :style="{ display: 'inline-block', verticalAlign: 'middle', color: textColor }">{{ text !== null ? text : platform }}</span>
  </span>
</template>

<script setup>
import { PhAppleLogo, PhAndroidLogo, PhWindowsLogo, PhLinuxLogo } from '@phosphor-icons/vue';
import { useData } from 'vitepress';

const { isDark } = useData();

const props = defineProps({
  platform: { type: String, required: true },  // 如 'iOS'
  text: { type: String, default: null },       // 自定义文本，如 'iOS 15+'
  type: { type: String, default: null }        // 未用，可忽略
});

// 映射平台到图标
const iconMap = {
  iOS: PhAppleLogo,
  macOS: PhAppleLogo,
  Android: PhAndroidLogo,
  Windows: PhWindowsLogo,
  Linux: PhLinuxLogo
};

const iconComponent = iconMap[props.platform] || null;

// 映射平台到主题色（支持 light/dark mode）
const platformIconColors = {
  ios: {
    light: '#333333',
    dark: '#CCCCCC'
  },
  macos: {
    light: '#000000',
    dark: '#FFFFFF'
  },
  android: {
    light: '#3DDC84',
    dark: '#3DDC84'
  },
  windows: {
    light: '#0078D7',
    dark: '#4FC3F7'
  },
  linux: {
    light: '#E95420',
    dark: '#FF6B35'
  }
};

const platformLower = props.platform.toLowerCase();
const getIconColor = () => {
  const colors = platformIconColors[platformLower] || { light: '#333333', dark: '#CCCCCC' };
  return isDark.value ? colors.dark : colors.light;
};

const iconColor = getIconColor();

// 计算样式
const badgeStyle = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  padding: '0.15em 0.5em',
  borderRadius: '4px',
  backgroundColor: 'transparent',  // 透明背景
  lineHeight: '1',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  minHeight: '1.2em',
  fontSize: '14px'  // 使用固定像素值，不会受父元素影响
};

const textColor = 'inherit';  // 文本继承父元素颜色

// 显示文本逻辑
const displayText = props.text !== null ? props.text.length > 0 : true;
</script>