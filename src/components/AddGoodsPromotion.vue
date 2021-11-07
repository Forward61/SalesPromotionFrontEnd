<template>
  <div class="AddGoodsPromotion">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="添加商品名" prop="goodsName">
        <el-input v-model="ruleForm.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="折扣价" prop="promotionPrice">
        <el-input v-model="ruleForm.promotionPrice"></el-input>
      </el-form-item>
      <el-form-item label="开始日期" prop="beginToEndDate">
        <el-date-picker
                v-model="ruleForm.beginToEndDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
<!--        <el-date-picker-->
<!--                v-model="ruleForm.beginDate"-->
<!--                align="right"-->
<!--                type="date"-->
<!--                placeholder="选择日期"-->
<!--                format="yyyy 年 MM 月 dd 日"-->
<!--                value-format="yyyy-MM-dd"-->
<!--        >-->
<!--        </el-date-picker>-->
      </el-form-item>
<!--      <el-form-item label="结束日期" prop="endDate">-->
<!--        <el-date-picker-->
<!--                v-model="ruleForm.beginDate"-->
<!--                align="right"-->
<!--                type="date"-->
<!--                placeholder="选择日期"-->
<!--                format="yyyy 年 MM 月 dd 日"-->
<!--                value-format="yyyy-MM-dd"-->
<!--        >-->
<!--        </el-date-picker>-->
<!--&lt;!&ndash;        <el-input v-model="ruleForm.endDate"></el-input>&ndash;&gt;-->
<!--      </el-form-item>-->

      <el-form-item>
<!--        <el-button type="primary" @click="queryForm('ruleForm')">查询</el-button>-->
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
        prop="homeaddress"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "AddGoodsPromotion",
      data() {
        return {
          ruleForm: {
            goodsName: '',
            promotionPrice: '',
            originalPrice: '',
            beginDate: '',
            endDate: false,
            type: [],
            maxWeight: '',
            maxAmount: '',
            imageUrl: '',
            homeaddress: '',
            beginToEndDate: ''
          },
          tableData: [],
          rules: {
            goodsName: [
              { required: true, message: '请输入商品名', trigger: 'blur' },
              { min: 1, max: 200, message: '长度在 1 到 200 个字', trigger: 'blur' }
            ]
            ,
            promotionPrice: [
              { required: true, message: '请选择优惠价', trigger: 'change' }
            ],
            beginToEndDate: [
              { required: true, message: '请选择促销日期', trigger: 'blur' }
            ]

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
            }else{
              alert('请输入所需信息');
            }
            var _this = this;
            console.log(_this.ruleForm.beginToEndDate);
            _this.ruleForm.beginDate = _this.ruleForm.beginToEndDate[0].toLocaleDateString();
            _this.ruleForm.endDate = _this.ruleForm.beginToEndDate[1].toLocaleDateString();
            console.log( _this.ruleForm.beginToEndDate[0].toLocaleDateString());
            var reqdata = this.$qs.stringify(_this.ruleForm);
            this.$axios
              .post('http://localhost:8086/sales/insertGoodsInfo',reqdata)
              .then(res=>{
                console.log(res.data);
                if(1===res.data){
                  alert(_this.ruleForm.goodsName +'添加成功');
                  _this.resetForm(_this.ruleForm);
                }else{
                  alert(_this.ruleForm.goodsName +'添加失败');
                }


              })

          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        queryForm(){

            var _this = this;
            // var queryreqdata = this.$qs.stringify(_this.ruleForm);
            this.$axios
                .post('http://localhost:8086/searchByGoodsName/'+_this.ruleForm.goodsName)
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
