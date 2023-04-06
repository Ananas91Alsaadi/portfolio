<script>
export default {
  data() {
    return {
      edu: [
        {
          title: `2020-2023 Jönköping, Sweden
          Bachelor in Graphic design and web development
`,
          content: `      * Management of dynamic webpages (using Vue.Js, PHP, etc…)    
          * Object-oriented programming
* Client APIs and libraries
* Creation of WordPress templates
* Search engine optimization
* User Experience Design
* Project Management
* Building database-driven web applications
          `,
        },
        {
          title: `2019-2020
Master in International Financial Analysis
`,
          content: `Master in International Financial Analysis with topics in Finance, Economics, Statistics and information technology.`,
        },
      ],
    };
  },
  methods: {
    
    handleOver() {
          this.$emit('ScrollingTrue', true);
          console.log('handleOver')
    },
    stopListening(){
      this.$emit('ScrollingFalse', false);
      console.log('stopListening')

    }

  },
};
</script>
<template>
  <main>
    <div class="container">
      <img src="/pic1.jpg" alt="" />
      <img src="/Picture2.png" alt="" />
      <h2>Jönköping University</h2>
      <img src="/Picture3.png" alt="" />
      <div @mouseover="handleOver" @mouseout="stopListening"   class="blogs scroller">
        <div class="blog" v-for="(i, index) in edu" :key="index">
          <h2>{{ i.title }}</h2>
          <p>{{ i.content }}</p>
        </div>
      </div>
    </div>


  </main>
</template>

<style>
</style>
