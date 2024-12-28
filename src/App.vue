<script setup lang="ts">
import { ioc } from 'iocello'
import type { IPerson } from './service/meta'
const person = ioc.construct<IPerson>('Person')
console.log(person)
</script>

<template>
  <h1>IOCELLO</h1>
  <p>{{ person.hello }}</p>
</template>
