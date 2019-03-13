<template>
	<div>
		<quill-editor v-model="content" 
			ref="myQuillEditor" 
			:options="editorOption" 
			@blur="onEditorBlur($event)" 
			@focus="onEditorFocus($event)"
      		@change="onEditorChange($event)">
   		</quill-editor>
   		<div style="margin-top: 50px;">
   			<el-button type="primary" @click="getCentent">获取编辑内容</el-button>
   		</div>
	</div>
</template>

<script>
	export default {
		data(){
            return {
                content:null,
                editorOption:{
                }
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            	
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            	
            },
            getCentent(){
            	console.log(this.content)
            }
        }
	}
</script>

<style>
</style>