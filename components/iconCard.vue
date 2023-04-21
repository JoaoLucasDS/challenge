<script lang="ts" setup></script>

<template>
  <a-card class="card">
    <a-row>
      <a-row height="100%" align="middle" style="padding-right: 5%;">
        <a-col style="height: fit-content;">
          <img src="@/assets/icon-dashboard.png" width="88px" height="50px"/>
        </a-col>
      </a-row>
      
      <a-divider type="vertical" style="height: 100px; background-color: #F16521"/>
      <div style="width: 55%; padding-left: 5%;">
        <p style=" width: 100%; font-weight: 400; margin: 0;">Analise seu perfil e entenda seus tipos de mercado</p>
        <a-button type="link" style="padding: 0; color: #1CA78B;"> 
          <span style="text-decoration: underline;">Veja mais →</span>
        </a-button>
      </div>
      
    </a-row>
  </a-card>
</template>

<style scoped>
.card{
  width: 330px; 
  border-radius: 15px; 
  font-family: 'Open Sans'; 
  padding-block: 5%; 

  position: relative;
  z-index: 1;
}
</style>
