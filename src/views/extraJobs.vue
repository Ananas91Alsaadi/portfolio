<script>
export default {
  data() {
    return {
      edu: [
        {
          title: `2017 - 2020
Accountant and Bookkeeper
LOGEN 2046 PLOGEN AV IOGT-NTO/Jönköping, Sweden`,
          content: `Accounting and financial statements
`,
        },
        {
          title: `2015
Administrator and Exam Coordinator
Syriskt Virtuellt Universitet/Damascus, Syria
`,
          content: `Degree coordinator and administrative
`,
        },
        {
          title: `2014-2015
Accountant and Bookkeeper
Kabak/Damascus, Syria
`,
          content: `Accounting and financial statements
`,
        },
        {
          title: `2013
Teacher
Tejarah Alhaditha School/Damascus, Syria
`,
          content: `Teaching IT and Syrian trade law.
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
  <main>
    <div class="container">
      <img
        src="https://cdn.corporatefinanceinstitute.com/assets/accounting.jpeg"
        alt=""
      />
      <img
        src="https://api.time.com/wp-content/uploads/2021/10/GettyImages-577674005.jpg"
        alt=""
      />
      <h2>Part Time</h2>
      <img
        src="https://contentstatic.techgig.com/photo/76920096/career-as-system-administrator-skills-required-certifications-and-salaries.jpg?186038"
        alt=""
      />
      <div @mouseover="handleOver" @mouseout="stopListening" class="blogs scroller">
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
