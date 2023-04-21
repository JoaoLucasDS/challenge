<template>
  <div class="container">

    <div class="content" style="font-family: 'Raleway'; padding-top: 10rem;">
        <a-row style="font-weight: 900; color: rgb(82,82,86); font-size: 200%; padding-bottom: 2rem; ">
            <p>Ser o próximo trader esportivo é muito <span style=" text-decoration: underline; color: rgb(28,167,139);">fácil|</span></p>
        </a-row>
        <a-row style="padding-bottom: 5rem;">
            Só na ETRADE Inc. você tem acesso ao melhor dashboard de análise de mercado esportivo. Melhore seu perfil e obtenha lucros de até 2x mais.
        </a-row>
        <a-row justify="center">
            <a-button size="large" style="font-weight: 900; border-radius: 15px;  border: 0px; background-color: rgb(237,110,45); color: white; padding-top: 20px; padding-bottom: 45px; padding-inline: 30px;">
                Crie sua conta grátis!
            </a-button>
        </a-row>
    </div>

    <div class="color-box">
      <img src="@/assets/bg-shapes.png">
      <div class="cards" style="font-family: 'Raleway'; padding-top: 7rem;">
        
        <a-row justify=center style="margin-bottom: -10px;">
          <darkIconCard iconImg="ata">Saiba se seu perfil é indicado para Lay ou Back</darkIconCard>
        </a-row>
        <a-row justify=center style="margin-bottom: -10px;">
          <iconCard/>
        </a-row>
        <a-row justify=center style=" ">
          <darkIconCard>Ganhe até 2x mais nos seus mercados</darkIconCard>
        </a-row>
      </div>
      </div>
    
  </div>
</template>

<script>
import iconCard from '~/components/iconCard.vue';
import darkIconCard from '~/components/darkIconCard.vue';

export default {
  components: {
    iconCard,
    darkIconCard
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.color-box {
  width: 50%;
  height: 100%;

  background-image: linear-gradient(45deg, #D03507, #D95129);

}
.color-box img{
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;

}

.content {
  width: 50%;
  height: 100%;
  padding-inline: 11rem;
  padding-block: 5rem;
}

.cards {
  width: 100%;
  height: 100%;
  padding-inline: 5rem;
  padding-block: 5rem;
}
</style>
