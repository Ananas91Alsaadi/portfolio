<script>
import { RouterLink, RouterView } from "vue-router";
import router from '@/router'
const width = window.innerWidth;
const height = window.innerHeight;
//git subtree push --prefix dist origin gh-pages
export default {
  components: {

  },
  data() {
    return {
      activeLi: 9,
      upS:false,
      downS:true,
      overChild:false,
      contactOn:false,
      dragging: false,
      posX: width/4.8,
      posY: height/2,
      mouseX: 0,
      mouseY: 0

    };
  },
  watch: {
  },
  methods: {

    Scrolling(v){
      this.overChild=v;
      console.log(this.overChild);
    },
    onWheel(event) {

      console.log(this.overChild);

     if (this.overChild) {
      event.stopPropagation();
    } else {
      // Get the amount the wheel was scrolled
      const delta = event.deltaY;
      // Increment or decrement the value based on the scroll direction
      if (delta < 0) {
        this.upS=false
      this.downS=true

        this.activeLi==9?'':this.activeLi++;
      } else {
        this.upS=true
      this.downS=false

        this.activeLi==1?'':this.activeLi--;
      }

      this.goToPage(this.activeLi);
          
}

    },
    goToPage(p) {
console.log(this.activeLi);
console.log('p'+ p);

if(this.activeLi!=p){

      this.upS=false;
      this.downS=false;
      console.log(this.upS+ 'UD'+ this.downS);

      if(this.activeLi<p){this.downS=true}else{this.upS=true} ;
      console.log(this.upS+ 'UD'+ this.downS);

      this.activeLi=p;
    }

      switch (p) {
        case 1:
        router.push('/service')
          break;
        case 2:
        router.push('/designEx')
          break;
          case 3:
        router.push('/porgEx')
          break;
          case 4:
        router.push('/skills')
          break;
          case 5:
        router.push('/Languages')
          break;
          case 6:
        router.push('/ExtraJobs')
          break;
          case 7:
        router.push('/education')
          break;
          case 8:
        router.push('/experiance')
          break;
        default:
        router.push('/')
          break;
      }

  },
  startDrag(event) {
      this.dragging = true;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    stopDrag() {
      this.dragging = false;
    },
    drag(event) {
      if (this.dragging) {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;
        this.posX += deltaX;
        this.posY += deltaY;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    }

}
};
</script>

<template>

<div class="main-body">

  <div>
    <ul class="ul-main">
      <li
        style="--i: 9"
        @click="goToPage(9) "
        :class="activeLi == 9 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/"> Intro</RouterLink>
      </li>

      <li
        style="--i: 8"
        @click="goToPage(8) "
        :class="activeLi == 8 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/experiance"> Experience</RouterLink>
      </li>
      <li
        style="--i: 7"
        @click="goToPage(7)"
        :class="activeLi == 7 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/education"> Education</RouterLink>
      </li>
      <li
        style="--i: 6"
        @click="goToPage(6)"
        :class="activeLi == 6 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/ExtraJobs"> Extra Jobs</RouterLink>
      </li>

      <li
        style="--i: 5"
        @click="goToPage(5)"
        :class="activeLi == 5 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/Languages">Competencies and Languages</RouterLink>
      </li>
      <li
        style="--i: 4"
        @click="goToPage(4)"
        :class="activeLi == 4 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/skills">
          Web Developmet & Design Skills</RouterLink
        >
      </li>
      <li
        style="--i: 3"
        @click="goToPage(3)"
        :class="activeLi == 3 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/porgEx"> Programing Projects</RouterLink>
      </li>

      <li
        style="--i: 2"
        @click="goToPage(2)"
        :class="activeLi == 2 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/designEx"> Designing Projects</RouterLink>
      </li>
      <li
        style="--i: 1"
        @click="goToPage(1)"
        :class="activeLi == 1 ? 'li-active' : ''"
      >
        <RouterLink class="nav-a" to="/service"> Services</RouterLink>
      </li>
    </ul>
  </div>
     <div>       
  <h1 class="Name">Anas Alsaadi</h1>


  <div @wheel="onWheel" class="show">
<div v-if="upS">
  <transition  name="slide-fade"> 

  <RouterView :key="$route.fullPath" @ScrollingFalse="Scrolling" @ScrollingTrue="Scrolling" />
</transition>

</div>

<div v-if="downS">
  <transition  name="slide-fade-down"> 

  <RouterView :key="$route.fullPath" @ScrollingFalse="Scrolling" @ScrollingTrue="Scrolling"/>
</transition>

</div>

  </div>
  <svg v-if="activeLi != 1" class="arrows mid" viewBox="0 0 100 100">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
</div>
 
</div>


</template>

<style scoped>
</style>
