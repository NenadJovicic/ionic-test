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
							style="margin-top: 20px"
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
		</ion-content>
	</ion-page>
</template>