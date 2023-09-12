<script setup lang="ts">
import { Weekday } from '../app';

defineProps<{
  amount: number,
  maxValue: number,
  weekday: Weekday,
  isCurrent: boolean
}>()

const maxPixels = 150

const calculateHeight = (amount: number, maxValue: number): { height: string } => {
  return {
    height: (maxPixels * amount / maxValue) + 'px'
  } 
}

const calculateBackground = (isCurrent: boolean): string => {
  return isCurrent ? 'bg-cyan' : 'bg-soft-red'
}

</script>

<template>
  <div 
    class="flex flex-col gap-2 justify-end items-center"
    :style="{height: maxValue}"
    >

    <!-- Column-->
    <div 
      class="bg-soft-red w-[33px] rounded-sm" 
      :class="calculateBackground(isCurrent)"
      :style="calculateHeight(amount, maxValue)">

      <!-- Dummy space to prevent bar container from collapsing -->
      <p>&nbsp;</p>
    </div>
    <p class="text-xs text-medium-brown">{{ weekday }}</p>
  </div>
</template>

