<template>
	<div>
		<p>
			<button class="btn-admin" @click="toggleForm">Admin</button>
		</p>
		<div class="form" :style="{'display': isFormShow ? 'block' : 'none'}">
			<p>
				<label>Name:</label>
				<input type="text" name="name"
					:value="fields.name"
					@input="updateValue"
				>
			</p>
			<p>
				<label>ImgURL:</label>
				<input type="text" name="imgUrl"
					v-model="values.imgUrl"
					@input="updateValue"
				>
			</p>
			<p>
				<label>Clicks:</label>
				<input type="text" name="clicks"
					v-model="values.clicks"
					@input="updateValue"
				>
			</p>
			<p class="btn-group">
				<button @click="onCancel">Cancel</button>{{' '}}
				<button @click="onSave">Save</button>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormItem',
	props: {
    fields: Object,
    saveForm: Function
  },
	data() {
		return {
			isFormShow: false
		}
	},
	computed: {
		values() {
			return Object.assign({}, this.fields);  // 浅拷贝
		}
	},
	methods: {
		toggleForm() {
			this.isFormShow = !this.isFormShow;
		},
		updateValue(e) {
			let { name, value } = e.target;
			this.values[name] = name === 'clicks' ? parseInt(value, 10) : value;
		},
		onCancel() {
			this.isFormShow = false;
		},
		onSave() {
			this.$emit('save-form', this.values);
		}
	}
}
</script>
