<!--
 * @Description: 登录页面
 * @Author: wander
 * @Date: 2022-05-05 14:58:17
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 23:45:06
-->
<template>
  <vue-particles
    color="#0293dd"
    :particleOpacity=".7"
    :particlesNumber="60"
    shapeType="circle"
    :particleSize="6"
    linesColor="#0293dd"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="1"
    :linesDistance="60"
    :moveSpeed="2"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    class="lizi"
  />
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    class="login-form"
    autocomplete="on"
    label-position="left"
  >
    <div class="title-container">
      <h3 class="title">
        {{ t("login.title") }}
      </h3>
      <LangSelect
        :isWhite="true"
        class="set-language"
      />
    </div>

    <el-form-item prop="username">
      <span class="svg-container">
        <i class="el-icon-user" />
      </span>
      <el-input
        ref="userNameRef"
        v-model="loginForm.username"
        :placeholder="t('login.username')"
        name="username"
        type="text"
        tabindex="1"
        autocomplete="on"
      />
    </el-form-item>

    <el-tooltip
      v-model="capsTooltip"
      content="Caps lock is On"
      placement="right"
      manual
    >
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input
          :key="passwordType"
          ref="passwordRef"
          v-model="loginForm.password"
          :type="passwordType"
          :placeholder="t('login.password')"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter="handleLogin"
        />
        <span
          class="show-pwd"
          @click="showPwd"
        >
          <svg-icon
            :name="passwordType === 'password' ? 'eye-off' : 'eye-on'"
          />
        </span>
      </el-form-item>
    </el-tooltip>

    <el-button
      :loading="loading"
      type="primary"
      style="width:100%; margin-bottom:30px;"
      @click.prevent="handleLogin"
    >
      {{ t("login.logIn") }}
    </el-button>

    <div style="position:relative">
      <div class="tips">
        <span>{{ t("login.username") }} : admin </span>
        <span>{{ t("login.password") }} : {{ t("login.any") }} </span>
      </div>
      <div class="tips">
        <span>{{ t("login.username") }} : editor </span>
        <span>{{ t("login.password") }} : {{ t("login.any") }} </span>
      </div>

      <el-button
        class="thirdparty-button"
        type="primary"
        @click="showDialog = true"
      >
        {{ t("login.thirdparty") }}
      </el-button>
    </div>
  </el-form>
  
  
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance
} from 'vue'
import { message } from 'element-plus';

export default defineComponent({
  name: 'home',
  components: {},
  setup() {
    const { proxy } = getCurrentInstance()
    const userInfor = reactive({
      username: '',
      password: ''
    })

    const submit = () => {
      console.log("登录了");
      proxy.$http.post('/api/user', userInfor).then((res) => {
        if(res.data.success) {
          sessionStorage.setItem('demo-token', res.data.token)
          message.success('登录成功')

        }else {
          message.error(res.data.info)
          sessionStorage.setItem('demo-token', null)

        }
      },
      (err) => {
        message.error("请求错误!")
        sessionStorage.setItem('demo-token', null)
        console.log(err)
      })
    }

    return {
      ...toRefs(userInfor),
      submit
      
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


  .lizi {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
  }
</style>
