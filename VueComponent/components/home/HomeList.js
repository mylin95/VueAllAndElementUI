;(function () {
    const template = `
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>员工ID</th>
                <th>姓名</th>
                <th>薪水</th>
            </tr>
            </thead>
            <tbody>
                <item v-for="(emp, index) in empList" :key="index" :emp="emp"></item>
            </tbody>
        </table>
    </div>`

    window.HomeList = {
        template,
        props: {
            empList: Array
        },
        components: {
            Item
        }
    }
})()