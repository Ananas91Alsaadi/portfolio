<script>
export default {
  data() {
    return {
      edu: [
        {
          title: `2020-2023
Bachelor in Web Development and Design
`,
          content: `Graphic design and web development with topics in Building database-driven web applications from the ground up, as well as creating templates for Wordpress and programming mobile web applications. design principles, typography, composition and color theory.`,
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
};
</script>
<template>
  <main>
    <div class="container">
      <img src="/portfolio/pic1.jpg" alt="" />
      <img src="/portfolio/Picture2.png" alt="" />
      <h2>Jönköping University</h2>
      <img src="/portfolio/Picture3.png" alt="" />
      <div @mouseover.prevent="" class="blogs scroller">
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
