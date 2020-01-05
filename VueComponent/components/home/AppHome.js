;(function() {
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!--右边上半区域-->
            <h1 class="page-header">Dashboard</h1>
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
                empList: [
                    {id: 1001, name: '胡歌1', salary: 10000},
                    {id: 1002, name: '胡歌2', salary: 10000},
                    {id: 1003, name: '胡歌3', salary: 10000},
                    {id: 1004, name: '胡歌4', salary: 10000},
                    {id: 1005, name: '胡歌5', salary: 10000}
                ]
            }
        },
        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1)
            }
        },
        components: {
            Dashboard,  // Dashboard是AppHome的子组件
            HomeList    // HomeList是AppHome的子组件
        }
    }
})()