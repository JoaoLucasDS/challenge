<script lang="ts" setup></script>

<template>
    <a-page-header
        class="header"
    >
    <template #tags>
        <img src="@/assets/logo.png" contained height="45px" width="125px"/>
    </template>
    <template #extra >
        <a-button ghost size="large" class="button">
            <template #icon><lock-filled /></template>
            LOG IN
        </a-button>
        <a-button ghost size="large" class="button">
            <template #icon><plus-outlined /></template>
            CADASTRAR
        </a-button>
      </template>
    </a-page-header>
    <div>
        <slot />
    </div>
</template>

<style scoped>
.header{
    background-color: rgba(0, 0, 0, 0.0);

    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    padding-inline: 4%;

}
.button {
    border-radius: 7px;
}
</style>
