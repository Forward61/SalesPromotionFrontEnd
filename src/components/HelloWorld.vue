<template>
  <div class="hello">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phoneno">
        <el-input v-model="ruleForm.phoneno"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="credentialsno">
        <el-input v-model="ruleForm.credentialsno"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" prop="homeaddress">
        <el-input v-model="ruleForm.homeaddress"></el-input>
      </el-form-item>
      <!--      <el-form-item label="次数" prop="injecttimes">-->
      <!--        <el-select v-model="ruleForm.injecttimes" placeholder="请选择第几次">-->
      <!--          <el-option label="第一次" value="1"></el-option>-->
      <!--          <el-option label="第二次" value="2"></el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->

      <!--      <el-form-item label="性别" prop="sex">-->
      <!--        <el-radio-group v-model="ruleForm.sex">-->
      <!--          <el-radio label="男"></el-radio>-->
      <!--          <el-radio label="女"></el-radio>-->
      <!--        </el-radio-group>-->
      <!--      </el-form-item>-->
      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryForm('ruleForm')">查询</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="phoneno"
              label="手机号"
              width="180">
      </el-table-column>
      <!--      <el-table-column-->
      <!--        prop="date"-->
      <!--        label="日期"-->
      <!--        width="180">-->
      <!--      </el-table-column>-->

      <el-table-column
              prop="homeaddress"
              label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "SalesPromotionMain",
    data() {
      return {
        ruleForm: {
          name: '',
          injecttimes: '',
          credentialsno: '',
          phoneno: '',
          delivery: false,
          type: [],
          sex: '',
          desc: '',
          info2: '',
          homeaddress: ''
        },
        tableData: [],
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
          ],
          injecttimes: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          desc: [
            { required: false, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid){
            var a = a;
          }
          var _this = this;
          var reqdata = this.$qs.stringify(_this.ruleForm);
          this.$axios
                  .post('http://ifreedom61.xyz:80/vbapi/vb/insertRecord',reqdata)
                  .then(res=>{
                    console.log(res.data);
                    _this.tableData=res.data;
                    reqdata = '';
                  })

        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
      queryForm(){

        var _this = this;
        var queryreqdata = this.$qs.stringify(_this.ruleForm);
        this.$axios
                .post('http://ifreedom61.xyz:80/vbapi/vb/findAll',queryreqdata)
                .then(res=>{
                  console.log(res.data);
                  // _this.ruleForm = res.data[0];
                  _this.tableData=res.data;
                  queryreqdata = '';
                })
      }
    }
  }


</script>

<style scoped>

</style>
