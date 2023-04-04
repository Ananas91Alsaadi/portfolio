<script>
export default {
  data(){ return { 
    hoverLink:[false,false],
  }}
}
</script>  

<template>
<div class='qr-container'>

  <div class="code-link">

  <h2>Near Meal</h2>
  <a href="https://xd.adobe.com/view/3081b18d-5584-430e-9c07-6a7bcab12b89-65d2/" @mouseover="hoverLink[5]=true" @mouseout="hoverLink[5]=false"><img  :src="hoverLink[5]?'img/logoUI.png':'qr/nearmeal.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Crypto Save
</h2>
  <a href="https://xd.adobe.com/view/f593454a-1d68-466b-92a5-ee48873bdbfc-a0c0/" @mouseover="hoverLink[6]=true" @mouseout="hoverLink[6]=false"><img  :src="hoverLink[6]?'img/crypto save logo.png':'qr/cryptosave.png'" alt=""></a>
</div>
</div>
</template>