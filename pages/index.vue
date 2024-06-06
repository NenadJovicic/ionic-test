<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Home</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-padding">
			<h1>Hello World</h1>
			<v-card class="mx-auto"
							style="max-width: 100%;"
							prepend-icon="$vuetify"
							subtitle="The #1 Vue UI Library"
							width="400">
				<template v-slot:title>
					<span class="font-weight-black">Welcome to Vuetify</span>
				</template>

				<v-card-text class="bg-surface-light pt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
					totam,
					magni doloremque veniam neque porro libero rerum unde voluptatem!
				</v-card-text>
			</v-card>
			<v-card color="#952175"
							class="mx-auto"
							style="margin-top: 20px; max-width: 100%"
							width="400">
				<div class="d-flex flex-no-wrap justify-space-between">
					<div>
						<v-card-title class="text-h5">
							Halcyon Days
						</v-card-title>

						<v-card-subtitle>Ellie Goulding</v-card-subtitle>

						<v-card-actions>
							<v-btn class="ms-2"
										 icon="mdi-play"
										 variant="text"></v-btn>
						</v-card-actions>
					</div>

					<v-avatar class="ma-3"
										rounded="0"
										size="125">
						<v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
					</v-avatar>
				</div>
			</v-card>
			<h1>Account</h1>
			<ion-button expand="full">Owner details</ion-button>
		</ion-content>
	</ion-page>
</template>
<style>
:root {
	/**
     * Setting the variables for DEMO purposes only.
     * Values will be set automatically when building an iOS or Android app.
     */
	--ion-safe-area-top: 20px;
	--ion-safe-area-bottom: 20px;
	--ion-safe-area-left: 20px;
	--ion-safe-area-right: 20px;
}
</style>

<style scoped>
ion-content::part(scroll) {
	padding-top: var(--ion-safe-area-top, 0);
	padding-bottom: var(--ion-safe-area-bottom, 0);
	padding-left: var(--ion-safe-area-left, 0);
	padding-right: var(--ion-safe-area-right, 0);
}
</style>