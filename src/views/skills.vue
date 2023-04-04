<script>
const width = window.innerWidth;
const height = window.innerHeight;
 
export default {
  data() {
    return {
      canvasSize: width > 1200 ? 100 : (width /1200 ) * 100,

      cPositions:[
      {x: 276.0064472894623, y: 350.4966106140833},
      {x: 411.3697112499583, y: 411.49357365834584},
      {x: 551.6374412959797, y: 178.50517383353957},
      {x: 526.1342176512486, y: 366.4958140355292},
      {x: 593.8158496314965, y: 281.5000458590978},
      {x: 296.6052048486682, y: 237.50223645012147},
      {x: 396.6563129933827, y: 320.49810419887217},
      {x: 480.0322364473114, y: 268.50069307917295},
      {x: 360.36326396049606, y: 119.50811121695779},
      {x: 463.3570517565256, y: 94.50935587094853},
      {x: 372.1339825657566, y: 198.504178110347},
      {x: 540.8476159078241, y: 113.50840993391557},
      {x: 422.1595366381138, y: 219.50313260099483},
      {x: 377.0384486512818, y: 265.5008424376518},
      {x: 458.45258567100035, y: 178.5051738335396},
      {x: 420.19775020390364, y: 159.50611977057258},


               
      ],
      circles: [
        { text: "VUE", level: 90, color: "#42b883", textC: "#35495e" },
        { text: "AJAX", level: 20, color: "#d2122e", textC: "#fff" },
        { text: "Axios", level: 70, color: "#854195", textC: "#fff" },
        { text: "P5", level: 80, color: "#ec245e", textC: "#fff" },
        { text: "JSON", level: 60, color: "#1c59a5", textC: "#fff" },
        { text: "API", level: 40, color: "#000", textC: "#fff" },
        { text: "React", level: 40, color: "#61dbfb", textC: "#000" },
        { text: "Node", level: 60, color: "#90c53f", textC: "#fff" },
        { text: "BS", level: 30, color: "#563d7c", textC: "#fff" },
        { text: "Next", level: 30, color: "#000", textC: "#fff" },
        { text: "Angular", level: 40, color: "#b52e31", textC: "#fff" },
        { text: "Konva", level: 80, color: "#0584ce", textC: "#fff" },
        { text: "Firebase", level: 70, color: "#039be5", textC: "#ffcb2d" },
        { text: "GMap", level: 80, color: "#34a853", textC: "#ea4335" },
        { text: "Figma", level: 80, color: "#f24e1e", textC: "#1abcfe" },
        { text: "XD", level: 60, color: "#450034", textC: "#ff61f6" },


      ],
    };
  },
  computed: {
    stageSize() {
      let obj = {
        width: (width * this.canvasSize * 75) / 100 / 100,
        height: (height * this.canvasSize * 90) / 100 / 100,
      };
      return obj;
    },
  },
  mounted() {
    this.circles=this.circles.sort((a, b) => b.level - a.level);
    for (let i = 0; i < this.circles.length; i++) {
      this.animate(i);
    }
  },
  methods: {
    findPos(){
      for (let i = 0; i < this.circles.length; i++) {

      let eName = "circle" + i;
      const hexagon = this.$refs.stage.getNode().findOne("." + eName);

      this.cPositions[i].x =hexagon.x();
      this.cPositions[i].y =hexagon.y();
      }
      console.log(this.cPositions);
    },
    animate(c) {
      let stageW = this.$refs.stage.getNode().getWidth()*50/100;
      let stageH = this.$refs.stage.getNode().getHeight()*50/100;

      let eName = "circle" + c;
      const hexagon = this.$refs.stage.getNode().findOne("." + eName);

      // example of Konva.Animation
      hexagon.setX(this.cPositions[c].x);
      hexagon.setY(this.cPositions[c].y);

      
    },
  },
};
</script>
<template>
  <main class="backG">
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
        <v-group v-for="(i, index) in circles" :key="index">
          <v-group
          @click="findPos"
          @touchstart="findPos"
          


:config="{
              x: 0*canvasSize/100,
              y: 50*canvasSize/100,
              name: 'circle' + index,
              draggable:true,
            }"
          >
            <v-circle
              :config="{
                radius: i.level*canvasSize/100,
                fill: i.color,
                shadowBlur: 10,
              }"
            />
            <v-text
              :config="{
                offsetX: i.level*canvasSize/100,
                offsetY: i.level*canvasSize/100 / 5,
                width: i.level * 2*canvasSize/100,
                text: i.text,
                fontSize: i.level / 2*canvasSize/100,
                fill: i.textC,
                verticalAlign: 'middle',
                textAlign: 'center',
                align: 'center',
              }"
            />
          </v-group>
        </v-group>
      </v-layer>
    </v-stage>
  </main>
</template>

<style>
</style>
