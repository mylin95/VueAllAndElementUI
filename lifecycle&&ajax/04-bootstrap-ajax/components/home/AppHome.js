;(function() {
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!--右边上半区域-->
            <!-- <h1 class="page-header">Dashboard</h1> -->
            <slot name="dashboard"></slot>
            <!--自定义事件：@自定义事件名="事件名"-->
            <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
            <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
            <home-list :empList="empList" :deleteEmp="deleteEmp" ></home-list>
        </div> `
    window.AppHome = {
        template,
        data() {
            return {
                hobbies: ['coding', '睡觉', '打豆豆', '看书'],
                empList: []
            }
        },
        created() {
            axios.get('http://127.0.0.1:5050/lifecycle&&ajax/04-bootstrap-ajax/emplist.json').then( (response) => {
                console.log(response);
                console.log(response.data);
                this.empList = response.data;
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally( () => {
            });
        },
        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1)

                // 删除之后，发布消息，导航组件（左侧）来统计删除总数
                PubSub.publish('changeNum', 1)
            }
        },
        components: {
            Dashboard,  // Dashboard是AppHome的子组件
            HomeList    // HomeList是AppHome的子组件
        }
    }
})()