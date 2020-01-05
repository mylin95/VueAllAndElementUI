;(function() {
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!--右边上半区域-->
            <h1 class="page-header">Dashboard</h1>
            <dashboard></dashboard>
            <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
            <home-list :empList="empList"></home-list>
        </div> `
    window.AppHome = {
        template,
        data() {
            return {
                empList: [
                    {id: 1001, name: '胡歌1', salary: 10000},
                    {id: 1002, name: '胡歌2', salary: 10000},
                    {id: 1003, name: '胡歌3', salary: 10000},
                    {id: 1004, name: '胡歌4', salary: 10000},
                    {id: 1005, name: '胡歌5', salary: 10000}
                ]
            }
        },
        components: {
            Dashboard,  // Dashboard是AppHome的子组件
            HomeList    // HomeList是AppHome的子组件
        }
    }
})()