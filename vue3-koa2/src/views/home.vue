<template>

  <el-row>
    <el-col :span="8"> 
      <el-input v-model="username" />
    </el-col>
  </el-row>
  <el-row >
    <el-col :span="8">
      <el-input v-model="password" type="password" placeholder="密码" />
    </el-col>
  </el-row>
  <el-row>
    <el-button type="primary" @click="submit">submit</el-button>
  </el-row>
  
  
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
