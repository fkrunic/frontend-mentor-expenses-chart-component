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

const calculateBackground = (isCurrent: boolean): Array<string> => {
  const current = ['bg-cyan', 'hover:bg-cyan-light']
  const base = ['bg-soft-red', 'hover:bg-soft-red-light']
  return isCurrent ? current : base
}

</script>

<template>
  <div 
    class="flex flex-col gap-2 justify-end items-center"
    :style="{height: maxValue}"
    >

    <!-- Column-->
    <div 
      class="relative group w-[33px] rounded-sm hover:cursor-pointer" 
      :class="calculateBackground(isCurrent)"
      :style="calculateHeight(amount, maxValue)">

      <!-- Dummy space to prevent bar container from collapsing -->
      <p>&nbsp;</p>

      <!-- Amount Tooltip -->
      <p class="
        absolute
        hidden
        bottom-full
        left-1/2
        -translate-x-1/2
        mb-2
        p-1 
        text-xs 
        text-center 
        rounded-sm 
        bg-dark-brown 
        text-white     
        
        group-hover:block
        "
        >${{ amount }}</p>

    </div>
    <p class="text-xs text-medium-brown">{{ weekday }}</p>
  </div>
</template>

