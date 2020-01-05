;(function() {
    const template = `
    <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.salary}}</td>
    </tr>`
    window.Item = {
        template,
        props: {
            emp: {
                type: Object,
                require: true
            }
        }
    }
})()