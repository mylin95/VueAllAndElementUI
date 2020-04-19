;(function() {
    const template = `
    <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.salary}}</td>
        <td>
            <a href="#" @click.prevent="deleteItem" >删除</a>
        </td>
    </tr>`
    window.Item = {
        template,
        props: {
            emp: {
                type: Object,
                require: true
            },
            deleteEmp: Function,
            index: Number
        },
        methods: {
            deleteItem() {
                this.deleteEmp(this.index)
            }
        },
    }
})()