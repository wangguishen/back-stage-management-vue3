<template>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

// 通过 actions 修改名称
userStore.updateName('李四')
</script>