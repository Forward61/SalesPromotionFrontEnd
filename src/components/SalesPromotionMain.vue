<template>
  <div class="SalesPromotionMain">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="商品名" prop="goodsName">
        <el-input v-model="ruleForm.goodsName"></el-input>
      </el-form-item>
<!--      <el-form-item label="手机号" prop="phoneno">-->
<!--        <el-input v-model="ruleForm.phoneno"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="身份证号" prop="credentialsno">-->
<!--        <el-input v-model="ruleForm.credentialsno"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="家庭住址" prop="homeaddress">-->
<!--        <el-input v-model="ruleForm.homeaddress"></el-input>-->
<!--      </el-form-item>-->


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
<!--      <el-form-item label="备注" prop="desc">-->
<!--        <el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="queryForm('ruleForm')">查询</el-button>
<!--        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>-->
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="goodsName"
        label="商品名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="promotionPrice"
        label="折扣价"
        width="180">
      </el-table-column>


      <el-table-column
          prop="beginDate"

          label="开始日期">

      </el-table-column>
      <el-table-column
        prop="endDate"
        label="结束日期">
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
            goodsName: '',
            promotionPrice: '',
            originalPrice: '',
            beginDate: '',
            endDate: '',
            type: [],
            maxWeight: '',
            maxAmount: '',
            imageUrl: '',
            homeaddress: ''
          },
          tableData: [],
          postUrl: '',
          rules: {
            goodsName: [
              { required: true, message: '请输入商品名', trigger: 'blur' },
              { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
            ]
            // ,
            // injecttimes: [
            //   { required: true, message: '请选择活动区域', trigger: 'change' }
            // ],
            // date1: [
            //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            // ],
            // date2: [
            //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            // ],
            // type: [
            //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            // ],
            // sex: [
            //   { required: true, message: '请选择性别', trigger: 'change' }
            // ],
            // desc: [
            //   { required: false, message: '请填写备注', trigger: 'blur' }
            // ]
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
              .post('http://118.24.52.46:8086/search/1',reqdata)
              .then(res=>{
                console.log(res.data);
                _this.tableData=res.data;
                reqdata = '';
              })

          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.queryForm()

          },
        queryForm(){

            var _this = this;
            // var queryreqdata = this.$qs.stringify(_this.ruleForm);

          if(_this.ruleForm.goodsName.length >0){
            _this.postUrl = 'https://ifreedom61.xyz/salesapi/searchByGoodsName/'+_this.ruleForm.goodsName;
          }else{
            _this.postUrl='https://ifreedom61.xyz/salesapi/searchAll/'
          }

          console.log('this  ' + this)
          console.log('this axios :' + this.axios1 )
          console.log('this axios :' + _this.axios1 )


          this.axios1
                .post(_this.postUrl)
                .then(res=>{
                  console.log(res.data);
                  // _this.ruleForm = res.data[0];
                  _this.tableData=res.data;
                  // queryreqdata = '';
                })
        }
      }
    }


</script>

<style scoped>

</style>
