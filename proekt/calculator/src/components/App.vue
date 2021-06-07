<template>
    <Page class="app">
    <ActionBar title="Вход"/>
      <StackLayout class="page" >
        
			<StackLayout class="form" >

				<StackLayout class="input-field" >
					<TextField class="input" hint="Электроная почта" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field">
					<TextField ref="password" class="input" hint="Пароль" secure="true" v-model="user.password" :returnKeyType="isLoggingIn ? 'done' : 'next'"
					 @returnPress="focusConfirmPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
        <Button text="Вход" @tap="gg"/>

		
             
			</StackLayout>
		</StackLayout>
    </Page>
</template>

<script >
import MenuVue from './Menu.vue';
export default {
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      },
       
    };
  },
  methods: {
    gg(){
      this.$navigateTo(MenuVue, { clearHistory: true });
    }
  }
};
</script>

<style scoped>
  
</style>