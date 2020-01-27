;(function() {
    const template = `
    <div class="jumbotron">
        <h1>{{ id }}</h1>
        <h2>{{ sportDetail.title }}</h2>
        <p>{{ sportDetail.content }}</p>
    </div>`
    window.SportDetail = {
        template,
        data() {
            return {
                id: null,
                sportDetail: {}
            }
        },

        created() {
            this.getSportById()
        },

        methods: {
            getSportById () {
                // 1.获取路由地址中的 id值
                this.id = this.$route.params.id - 0
                // 2.获取所有的体育新闻
                axios.get('http://127.0.0.1:5050/vue-router/02-bootstrap-vue-router/db/sport.json').then( (response) => {
                    // 3.通过id获取指定的数据
                    const sportArr = response.data
                    this.sportDetail = sportArr.find(detail => {
                        return detail.id === this.id
                    })
                })
                .catch( (error) => {
                    console.log(error);
                })
                .finally( () => {
                })
            }
        },
        watch: {
            '$route': function() {
                this.getSportById()
            }
        },
    }
})()