<!--
 * @Description: 登录页面
 * @Author: wander
 * @Date: 2022-05-05 14:58:17
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 18:09:25
-->
<template>
  <div class="login-container">
     <!--引入粒子特效-->
    <Particles
      id="tsparticles"
      :options="particlesOptions"
      :key="'crazyParticles'"
      :particlesInit="particlesInit"
    />
    <div class="contant">
      <div class="title-container">
        <h3 class="title">
          {{ t("login.title") }}
        </h3>
        <LangSelect
          :isWhite="true"
          class="set-language"
        />
      </div>
      <el-form class="login-form">
        <el-form-item prop="username">
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
        <el-form-item prop="password">
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
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%; margin-bottom:30px;"
          @click.prevent="handleLogin"
        >
          {{ t("login.logIn") }}
        </el-button>
      </el-form>
    </div>
    
   
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  ref,
  nextTick,
  toRefs,
  getCurrentInstance
} from 'vue'

import LangSelect from '@/components/lang_select/Index.vue'
import {isValidUsername}  from '@/utils/validate'
import { useRoute, LocationQuery, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { UserActionTypes } from '@/store/modules/user/action-types'
import { useI18n } from 'vue-i18n'

import { Message } from 'element-plus';


// 粒子特效相关引用
import { particlesOptions } from './particles-config'
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default defineComponent({
  name: 'home',
  components: {
    LangSelect
    
  },
  setup() {
    const userNameRef = ref(null)
    const passwordRef = ref(null)
    const loginFormRef = ref(null)
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const { t } = useI18n()
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {}
    })

    const methods = reactive({
      validateUsername: (rule: any, value: string, callback: Function) => {
        if (!isValidUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      },
      validatePassword: (rule: any, value: string, callback: Function) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      },
      checkCapslock: (e: KeyboardEvent) => {
        const { key } = e
        state.capsTooltip =
          key !== null && key.length === 1 && key >= 'A' && key <= 'Z'
      },
      showPwd: () => {
        if (state.passwordType === 'password') {
          state.passwordType = ''
        } else {
          state.passwordType = 'password'
        }
        nextTick(() => {
          (passwordRef.value as any).focus()
        })
      },
      handleLogin: () => {
        state.loading = true
        store.dispatch(UserActionTypes.ACTION_LOGIN, state.loginForm)
        router
          .push({
            path: state.redirect || '/',
            query: state.otherQuery
          })
          .catch(err => {
            console.warn(err)
          })
        // Just to simulate the time of the request
        setTimeout(() => {
          state.loading = false
        }, 0.5 * 1000)
        // (loginFormRef.value as any).validate(async(valid: boolean) => {
        //   if (valid) {
        //     state.loading = true
        //     await store.dispatch(UserActionTypes.ACTION_LOGIN, state.loginForm)
        //     router
        //       .push({
        //         path: state.redirect || '/',
        //         query: state.otherQuery
        //       })
        //       .catch(err => {
        //         console.warn(err)
        //       })
        //     // Just to simulate the time of the request
        //     setTimeout(() => {
        //       state.loading = false
        //     }, 0.5 * 1000)
        //   } else {
        //     return false
        //   }
        // })
      }
    })

    function getOtherQuery(query: LocationQuery) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {} as LocationQuery)
    }
    const particlesInit = (engine: Engine) => {
      loadFull(engine)
    }

    watch(() => route.query, query => {
      if (query) {
        state.redirect = query.redirect?.toString() ?? ''
        state.otherQuery = getOtherQuery(query)
      }
    })

    onMounted(() => {
      if (state.loginForm.username === '') {
        (userNameRef.value as any).focus()
      } else if (state.loginForm.password === '') {
        (passwordRef.value as any).focus()
      }
    })

    return {
      particlesInit,
      particlesOptions,
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods),
      t
    }
  }







  // setup() {
  //   // const { proxy } = getCurrentInstance()
  //   const particlesInit = (engine: Engine) => {
  //     loadFull(engine)
  //   }
  //   const userInfor = reactive({
  //     username: '',
  //     password: ''
  //   })

  //   const submit = () => {
  //     console.log("登录了");
  //     // proxy.$http.post('/api/user', userInfor).then((res) => {
  //     //   if(res.data.success) {
  //     //     sessionStorage.setItem('demo-token', res.data.token)
  //     //     Message.success('登录成功')

  //     //   }else {
  //     //     Message.error(res.data.info)
  //     //     sessionStorage.setItem('demo-token', null)

  //     //   }
  //     // },
  //     // (err) => {
  //     //   Message.error("请求错误!")
  //     //   sessionStorage.setItem('demo-token', null)
  //     //   console.log(err)
  //     // })
  //   }

  //   return {
  //     ...toRefs(userInfor),
  //     submit,
  //     particlesInit,
  //     particlesOptions
      
  //   }
  // }
})
</script>

<style lang="scss">

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  #tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: -10;
  }
  .contant {
    position: relative;
    width: 520px;
    height: 286px;
    border-radius: 10px;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: cadetblue;
    overflow: hidden;
    .title-container {
      position: relative;
      padding: 10px 0;

      .title {
        font-size: 26px;
        color: $lightGray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }

      .set-language {
        color: #fff;
        position: absolute;
        top: 3px;
        font-size: 18px;
        right: 0px;
        cursor: pointer;
      }
    }
    .login-form {
      padding: 0 20px;
    }
  }

}

  
</style>
