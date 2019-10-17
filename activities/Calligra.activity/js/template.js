
// Template item
var TemplateItem = {
	template: `
		<div class="col-xs-12 col-md-6 col-lg-4 template-col" v-on:click="onClick">
			<img class="mr3 template-item-image" v-bind:src="image"></img>
		</div>
		`,
	props: ['image'],
	methods: {
		onClick: function() {
			this.$emit('clicked');
		}
	}
}

// Template Viewer component
var TemplateViewer = {
	components: {'template-item': TemplateItem},
	template: `
		<div class="row">
			<template-item v-for="(item,i) in template.images" :key="item.image"
				v-bind:ref="'item'+(i++)"
				v-bind:image="item.image"
				v-on:clicked="itemClicked(item)">
			</template-item>
		</div>
	`,
	props: ['template'],
	methods: {
		itemClicked: function(item) {
			this.$emit('itemselected', item);
		}
	}
};
