<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-button v-on:click="goBack">Back</ion-button>
				</ion-buttons>
				<ion-title slot="primary">Owner details</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<h1>
				This is owner details page
			</h1>
		</ion-content>
	</ion-page>
</template>
<script setup lang="ts">

const router = useIonRouter();

const goBack = () => router.back();
</script>
