;(function() {
    const template = `
    <!--体育栏目-->
    <div>
        <ul>
            <li v-for="sport in sportArr" :key="sport.id" >
                <router-link :to="'/news/sport/detail/' + sport.id">{{sport.title}}</router-link>
            </li>
        </ul>
        <!--详情 渲染出SportDetail组件-->
        <router-view></router-view>
    </div>  `
    window.Sport = {
        template,
        data() {
            return {
                sportArr: []
            }
        },

        created() {
            this.getSportArr()
        },
        methods: {
            getSportArr() {
                axios.get('http://127.0.0.1:5050/vue-router/02-bootstrap-vue-router/db/sport.json').then( (response) => {
                    console.log(response.data);
                    this.sportArr = response.data;
                })
                .catch( (error) => {
                    console.log(error);
                })
                .finally( () => {
                })
            }
        }
    }
})()