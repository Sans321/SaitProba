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

				<StackLayout v-show="!isLoggingIn" class="input-field">
					<TextField ref="confirmPassword" class="input" hint="Повторите пароль" secure="true" v-model="user.confirmPassword" returnKeyType="done"
					 fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<Button :text="isLoggingIn ? 'Войти' : 'Зарегистрироваться'" @tap="submit" class="btn btn-primary m-t-20" />
			
             <Label class="login-label sign-up-label" @tap="toggleForm">
	          <FormattedString>
	            <Span :text="isLoggingIn ? 'Регестрация ' : 'Вернуться к входу'" />
	            <Span :text="isLoggingIn ? 'Зарегитсрировться' : ''" class="bold" />
	          </FormattedString>
	         </Label>
             
			</StackLayout>
		</StackLayout>
    </Page>
</template>

<script >
const userService = {
  register(user) {
    return Promise.resolve(user);
  },
  login(user) {
    return Promise.resolve(user);
  },
  resetPassword(email) {
    return Promise.resolve(email);
  }
};
const HomePage = {
 
};
export default {
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },
    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Пожалуйста, укажите адрес электронной почты и пароль.");
        return;
      }
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
      
    },
    login() {
      userService
        .login(this.user)
        .then(() => {
          this.$navigateTo(HomePage);
        })
        .catch(() => {
          this.alert("К сожалению, такой учетную записи нету.");
        });
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Ваши пароли не совпадают.");
        return;
      }
      userService
        .register(this.user)
        .then(() => {
          this.alert("Ваш аккаунт был успешно создан.");
          this.isLoggingIn = true;
        })
        .catch(() => {
          this.alert("К сожалению, нам не удалось создать вашу учетную запись.");
        });
    },
    forgotPassword() {
      prompt({
        title: "Забыл пароль",
        message:
          "Введите адрес электронной почты, который вы использовали при регистрации, чтобы сбросить пароль.",
        inputType: "почта",
        defaultText: "",
        okButtonText: "Ок",
        cancelButtonText: "отмена"
      }).then(data => {
        if (data.result) {
          userService
            .resetPassword(data.text.trim())
            .then(() => {
              this.alert(
                "Ваш пароль был успешно сброшен. Пожалуйста, проверьте свою электронную почту, чтобы узнать, как выбрать новый пароль."
              );
            })
            .catch(() => {
              this.alert(
                "К сожалению, при сбросе пароля произошла ошибка."
              );
            });
        }
      });
    },
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },
    alert(message) {
      return alert({
        title: "",
        okButtonText: "ОК",
        message: message
      });
    }
  }
};
</script>

<style scoped>
  
</style>