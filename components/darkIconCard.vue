<template>
  <a-card class="card">
    <a-row>
      <a-row height="100%" align="middle" style="padding-right: 5%; margin-top: -20px;">
        <a-col v-if="iconImg" style="height: fit-content; width: 100px; padding-left: 37px; ">
            <img src="@/assets/icon-money.png" width="35px" height="73px"/>
        </a-col>
        <a-col v-else style="height: fit-content; width: 100px; padding-left: 30px; ">
            <img src="@/assets/icon-calculator.png" width="47px" height="57px"/>
        </a-col>
      </a-row>
      
      <a-divider type="vertical" style="height: 100px; background-color: white"/>
      <div style="width: 45%; padding-left: 5%;  padding-top: 5%;">
        <slot style=" width: 100%; font-weight: 400; margin: 0;"/>
      </div>
      
    </a-row>
  </a-card>
</template>

<script>

export default {
    props: {
        iconImg: String
    },
}
</script>

<style scoped>
.card{
    width: 300px; 
    border-radius: 15px; 
    font-family: 'Open Sans'; 
    padding-block: 5%; 
    background-color: rgba(237, 110, 45, 0.9);
    position: relative;
    z-index: 0;
    color: white;
    border: 0px;
}
</style>
