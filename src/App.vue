<script setup lang="ts">
import { onMounted } from 'vue';
import Bar from './components/Bar.vue';
import { Weekday, content } from './app'

const maxValue = Math.max(...content.map((o) => o.amount))

onMounted(() => {
  document.body.className = 'bg-cream font-dm-sans'
})
</script>

<template>

  <!-- Page Layout-->
  <div class="flex flex-col items-center justify-center min-h-screen m-4">

    <!-- Card -->
    <div class="
      flex 
      flex-col 
      gap-4 
      w-full
      
      desktop:w-[32rem]
      ">

      <!-- Balance -->
      <div class="
        flex 
        flex-row 
        justify-between 
        items-center 
        p-4 
        bg-soft-red 
        rounded-lg
        
        desktop:p-6
        desktop:rounded-2xl
        ">
        <div class="flex flex-col gap-2 items-start justify-center">
          <p class="text-sm text-cream desktop:text-base">My balance</p>
          <p class="text-3xl font-bold text-cream desktop:text-3xl">$921.48</p>
        </div>
        <img src="./assets/logo.svg">
      </div>

      <!-- Chart Card -->
      <div class="
        flex 
        flex-col 
        gap-6 
        py-6 
        p-4 
        bg-white 
        rounded-lg
        
        desktop:rounded-2xl
        desktop:p-8
        desktop:gap-8
        desktop:py-10
        desktop:shadow-sm
        ">
        <p class="text-2xl font-bold text-dark-brown desktop:text-3xl">Spending - Last 7 days</p>

        <!-- Bars -->
        <div class="
          flex 
          flex-row 
          items-end 
          justify-center 
          gap-3 
          mt-6
          
          desktop:mt-10
          desktop:gap-4
          ">
          <Bar 
            v-for="bar of content"
            :amount="bar.amount"
            :max-value="maxValue"
            :is-current="bar.day === 'wed'"
            :weekday="(bar.day as Weekday)"
            ></Bar>
        </div>

        <!-- Divider -->
        <div class="border-solid border-b-[1px] border-medium-brown/25"></div>

        <!-- Details -->
        <div class="flex flex-row items-center justify-between">

          <!-- Total -->
          <div class="flex flex-col gap-2">
            <p class="text-sm text-medium-brown desktop:text-base">Total this month</p>
            <p class="text-3xl font-bold text-dark-brown desktop:text-5xl">$478.33</p>
          </div>

          <!-- Delta -->
          <div class="flex flex-col mt-4 justify-end items-end">
            <p class="text-sm font-bold text-dark-brown desktop:text-base">+2.4%</p>
            <p class="text-sm text-medium-brown desktop:text-base">from last month</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>