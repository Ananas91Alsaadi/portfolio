<script>
export default {
  data(){ return { 
    hoverLink:[false,false,false,false],
  }}
}
</script>  

<template>
<div class='qr-container'>

  <div class="code-link">

  <h2>Near Meal</h2>
  <a href="https://xd.adobe.com/view/3081b18d-5584-430e-9c07-6a7bcab12b89-65d2/" @mouseover="hoverLink[1]=true" @mouseout="hoverLink[1]=false"><img  :src="hoverLink[1]?'img/logoUI.png':'qr/nearmeal.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Crypto Save
</h2>
  <a href="https://xd.adobe.com/view/f593454a-1d68-466b-92a5-ee48873bdbfc-a0c0/" @mouseover="hoverLink[2]=true" @mouseout="hoverLink[2]=false"><img  :src="hoverLink[2]?'img/crypto save logo.png':'qr/cryptosave.png'" alt=""></a>
</div>

<div class="code-link">

<h2>Halal.se
</h2>
<a href="https://www.figma.com/proto/jb60371MuM23nUED81CmHA/Halal-godk%C3%A4nd?node-id=54-198&starting-point-node-id=7%3A32" @mouseover="hoverLink[3]=true" @mouseout="hoverLink[3]=false"><img  :src="hoverLink[3]?'img/hlal.png':'qr/halal.png'" alt=""></a>
</div>

<div class="code-link">

<h2>Korintos
</h2>
<a href="https://www.figma.com/proto/mlhWU2oblz6HQ07IUGllfY/IxD-Group-Project-Hotel?node-id=58-331&starting-point-node-id=58%3A331" @mouseover="hoverLink[4]=true" @mouseout="hoverLink[4]=false"><img  :src="hoverLink[4]?'img/kor.png':'qr/Korintos.png'" alt=""></a>
</div>


</div>
</template>