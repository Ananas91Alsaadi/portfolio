<script>
export default {
  data() {
    return {
      edu: [
      {
          title: `November 2022 - March 2022
                    Web designer and developer
Swemount/Sweden`,
          content: `          Develop the website from the ground up, incorporating a custom-built canvas for rendering solar panel layouts atop residential roofs. Perform comprehensive calculations to determine the most efficient use of resources and materials. Provide the functionality for users to generate a downloadable PDF report based on the results.
          `,
        },

        {
          title: `May 2022 - June 2022
                    Intern as web designer and developer
Webbay/Sweden`,
          content: `It was my internship. I worked as a designer for both web and mobile applications. I also worked on a website using WordPress to make it. HTML, CSS, and JS are mainly used to program the website. Moreover, a little bit with Flutter platform and dart language.
`,
        },
        {
          title: `August 2018 - August 2019
Consultant and administrator
Kronofogdemyndighet/Jönköping, Sweden
`,
          content: `The work involved ongoing case management via the Kronofogdens IT system. Case management included gathering information and processing documentation for decisions, registering maintenance by moving customers to different locations in the IT system, and checking payment deviations. The work also included mail handling, archive management, and conversations with other authorities.
`,
        },
        {
          title: `June 2013 - March 2015

Financial manager
Alaseel/Damascus, Syria
`,
          content: `          Daily financial follow-up, balance sheet, budget, certify and check that information has been registered in the computer, follow-up of attendance and calculate workers' salaries, draw advertising posters, and maintain computers.

`,
        },
        {
          title: `August 2010 - June 2013
Cost controller
Ebla/Damascus, Syria
`,
          content: `          In my role as a Cost Controller, I was responsible for various tasks such as inventory management, budget and balance sheet development, and data recording in the system. Additionally, I demonstrated leadership skills by leading the accounting department team to achieve the set objectives.

`,
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
  <main >
    <div class="container">
      <img src="/pic4.jpeg" alt="" />
      <img src="/pic5.jpg" alt="" />
      <h2>Jobs and Works</h2>
      <img src="https://blog.lpcinternational.co.uk/hubfs/What%20Skills%20Does%20A%20Supply%20Chain%20Consultant%20Need%20%26%20Why.png" alt="" />
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
