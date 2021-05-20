<template>
  <div class="login">
    <div class="login_content">
      <div class="login_logo">LOGIN</div>
      <a-form :wrapper-col="wrapperCol" class="login_form">
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-model:value="modelRef.username"
          >
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos['password']">
          <a-input-password
            v-model:value="modelRef.password"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item class="login_form_item">
          <a-button type="primary" @click.prevent="onSubmit">22222222222}</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
import { useForm } from "@ant-design-vue/use";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const modelRef = reactive({
      username: "admin",
      password: "admin",
    });
    const router = useRouter();

    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        username: [
          {
            required: true,
          },
        ],
        password: [
          {
            required: true,
          },
        ],
      })
    );
    const onSubmit = () => {
      validate()
        .then((res) => {
          const { username, password } = res;
          if (username === "admin" && password === "admin") {
            router.push({
              name: "Dashboard",
            });
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      wrapperCol: { span: 24 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
</script>

<style lang="less" scoped>
.login_language {
  position: absolute;
  right: 30px;
  top: 10px;
}
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/svg/login.svg');
  &_content {
    width: 350px;
    .login_form {
      .login_form_item {
        width: 100%;
        .ant-btn {
          width: 100%;
        }
      }
    }
  }
  &_logo {
    text-align: center;
  }
}
</style>
